from fastapi import APIRouter, Depends, HTTPException
import redis
import httpx
from typing import Annotated
import json

from app.config import settings
from app.redis import get_redis
from app.auth import get_current_user
from app.models.user import User as UserModel
from app.schemas.city import CacheCities

router = APIRouter(prefix="/weather", tags=["Weather"])


@router.get("/api/get-weather")
async def get_weather(city: str):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={settings.api_key}&units=metric"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error fetching weather data")
        return response.json()


@router.post("/cache")
async def cache_weather(
    data: CacheCities,
    current_user: Annotated[UserModel, Depends(get_current_user)],
    redis_cl: Annotated[redis.Redis, Depends(get_redis)]
):
    cache_key = f"weather:user:{current_user.id}"
    city_name = data.weather["location"]["name"].lower()
    await redis_cl.hset(cache_key, city_name, json.dumps(data.weather))
    await redis_cl.expire(cache_key, settings.weather_cache_expire)
    return {"message": f"Weather for {city_name} cached successfully"}


@router.get("/cache")
async def get_cached_weather(
    current_user: Annotated[UserModel, Depends(get_current_user)],
    redis_cl: Annotated[redis.Redis, Depends(get_redis)]
):
    cache_key = f"weather:user:{current_user.id}"
    cached_data = await redis_cl.hgetall(cache_key)

    if not cached_data:
        return {}
    return {
        (k.decode() if isinstance(k, bytes) else k): json.loads(v)
        for k, v in cached_data.items()
    }