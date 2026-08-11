import aiohttp
import os

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from loguru import logger
from pathlib import Path
from pydantic import EmailStr
from uuid import uuid4
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import update, select
from typing import Annotated, Optional

from app.config import settings
from app.db import get_async_session
from app.exceptions import(
    ImageTooLargeException, 
    InvalidImageExtensionException, 
    UserAlreadyExistsException, 
    InvalidEmailException)
from app.utils.auth import get_current_user
from app.models.user import User as UserModel
from app.schemas.city import CityUpdate

MEDIA_DIR = Path("")
AVATARS_DIR = Path(__file__).resolve().parent.parent.parent.parent / "frontend" / "avatars" / "users"

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/me")
async def read_me(current_user: Annotated[UserModel, Depends(get_current_user)]):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email,
        "avatar_url": current_user.avatar_url or None,
        "cities": current_user.cities or [],
        "add_button": current_user.add_button
    }


@router.post("/me/avatar")
async def upload_avatar(
    avatar: Annotated[UploadFile, File()],
    current_user: Annotated[UserModel, Depends(get_current_user)],
    session: Annotated[AsyncSession, Depends(get_async_session)]
):
    allowed_types = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
    }

    extension = allowed_types.get(avatar.content_type)

    if extension is None:
        logger.warning(f"User {current_user.id} tried to upload an invalid avatar type: {avatar.content_type}")
        raise InvalidImageExtensionException()

    contents = await avatar.read()
    max_size = 10 * 1024 * 1024

    if len(contents) > max_size:
        logger.warning(f"User {current_user.id} tried to upload an avatar that is too large: {len(contents)} bytes")
        raise ImageTooLargeException()

    filename = f"{current_user.id}_{uuid4().hex}{extension}"
    file_path = AVATARS_DIR / filename

    AVATARS_DIR.mkdir(parents=True, exist_ok=True)

    file_path.write_bytes(contents)

    current_user.avatar_url = f"/avatars/users/{filename}"

    await session.commit()
    await session.refresh(current_user)

    return {
        "avatar_url": current_user.avatar_url,
    }


@router.post("/me/city")
async def update_city(
    data: CityUpdate,
    current_user: Annotated[UserModel, Depends(get_current_user)],
    session: Annotated[AsyncSession, Depends(get_async_session)]
):
    await session.execute(
        update(UserModel)
        .where(UserModel.id == current_user.id)
        .values(cities=data.cities)
    )
    await session.commit()

    return {
        "cities": data.cities
    }


@router.put("/me/add_button")
async def update_add_button(
    current_user: Annotated[UserModel, Depends(get_current_user)],
    session: Annotated[AsyncSession, Depends(get_async_session)]
):
    current_user.add_button = not current_user.add_button
    
    await session.commit()
    await session.refresh(current_user)

    return {"add_button": current_user.add_button}


@router.put("/me/name")
async def update_user_name(
    current_user: Annotated[UserModel, Depends(get_current_user)],
    session: Annotated[AsyncSession, Depends(get_async_session)],
    name: Optional[str] = None
):

    result = await session.execute(select(UserModel).where(UserModel.name == name))
    user = result.scalar_one_or_none()

    if user:
        logger.warning(f"User {current_user.id} tried to update their name to an already existing name: {name}")
        raise UserAlreadyExistsException(name)

    current_user.name = name

    await session.commit()
    await session.refresh(current_user)

    return {"name": current_user.name}


@router.delete("/me/avatar")
async def delete_avatar(
    current_user: Annotated[UserModel, Depends(get_current_user)],
    session: Annotated[AsyncSession, Depends(get_async_session)]
):

    if current_user.avatar_url:
        filename = Path(current_user.avatar_url).name
        file_path = AVATARS_DIR / filename

        if file_path.exists():
            file_path.unlink()

    current_user.avatar_url = None

    await session.commit()
    await session.refresh(current_user)

    return {
        "avatar_url": current_user.avatar_url
    }


@router.get("/validate-real-email")
async def validate_real_email(email: EmailStr) -> dict:
    url = "https://emailreputation.abstractapi.com/v1/"
    params = {
        "api_key": settings.validation_api_key,
        "email": email
    }
    
    print(f"\n[DEBUG] KEY IN USE: '{settings.validation_api_key}'\n")
    timeout = aiohttp.ClientTimeout(total=3.0)

    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(url, params=params) as response:
                if response.status != 200:
                    logger.error(f"Abstract API returned status {response.status} for email '{email}'")
                    return {"email": email, "is_exist": None, "reason": "API error or limit reached"}
                
                data = await response.json()
                deliverability_data = data.get("email_deliverability", {})
                status = deliverability_data.get("status")

                if status == "deliverable":
                    is_exist = True
                elif status == "undeliverable":
                    is_exist = False
                else:
                    is_exist = None

                return {"email": email, "is_exist": is_exist}
    except aiohttp.ClientError as e:
        logger.error(f"Error occurred while validating email '{email}': {str(e)}")
        return {"email": email, "is_exist": None, "reason": "Service unavailable"}