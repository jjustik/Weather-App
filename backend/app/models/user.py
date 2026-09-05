from datetime import datetime
import uuid
from app.db import Base
from sqlalchemy import Float, String, Uuid, Boolean, Integer
from sqlalchemy.dialects.postgresql import JSONB 
from sqlalchemy.orm import Mapped, mapped_column

class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(50), nullable=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=True)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    avatar_url: Mapped[str | None] = mapped_column(String(500), nullable=True)

    refresh_token_hash: Mapped[str | None] = mapped_column(String(255), nullable=True)
    
    cities: Mapped[list[str] | None] = mapped_column(JSONB, nullable=True)
    add_button: Mapped[bool] = mapped_column(default=True)

    stripe_customer_id: Mapped[str | None] = mapped_column(String, unique=True, nullable=True)
    is_premium: Mapped[bool] = mapped_column(Boolean, default=False)
    coins_balance: Mapped[int] = mapped_column(Integer, default=0)

    def __repr__(self):
        return f"User(id={self.id}, email={self.email})"


class Subscription(Base):
    __tablename__ = "subscriptions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(Integer)
    stripe_customer_id: Mapped[str] = mapped_column(String, unique=True)
    stripe_subscription_id: Mapped[str] = mapped_column(String, unique=True)
    status: Mapped[str] = mapped_column(String)
    current_period_end: Mapped[datetime] = mapped_column(datetime)
    created_at: Mapped[datetime] = mapped_column(datetime)
    updated_at: Mapped[datetime] = mapped_column(datetime)


class Payment(Base):
    __tablename__ = "payments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(Integer)
    stripe_session_id: Mapped[str] = mapped_column(String, unique=True)
    type: Mapped[str] = mapped_column(String)
    amount: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String)
    created_at: Mapped[datetime] = mapped_column(datetime)


class ProceedWebhookEvent(Base):
    __tablename__ = "proceed_webhook_events"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    stripe_event_id: Mapped[str] = mapped_column(String, unique=True)
    processed_at: Mapped[datetime] = mapped_column(datetime)