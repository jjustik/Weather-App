from fastapi import status

class AppException(Exception):
    status_code: int = status.HTTP_500_INTERNAL_SERVER_ERROR
    detail: str = "Internal server error"

    def __init__(self, detail: str | None = None, status_code: int | None = None):
        if detail:
            self.detail = detail
        if status_code:
            self.status_code = status_code
        super().__init__(self.detail)


class UserAlreadyExistsException(AppException):
    status_code = status.HTTP_409_CONFLICT

    def __init__(self, email: str):
        self.email = email
        super().__init__(f"User with email {email} already exists.")


class UserNotFoundException(AppException):
    status_code = status.HTTP_404_NOT_FOUND

    def __init__(self, user_id: str):
        self.user_id = user_id
        super().__init__(f"User with ID {user_id} not found.")


class UnauthorizedException(AppException):
    status_code = status.HTTP_401_UNAUTHORIZED
    detail = "Not authenticated"


class InvalidCredentialsException(AppException):
    status_code = status.HTTP_401_UNAUTHORIZED

    def __init__(self):
        super().__init__("Invalid credentials provided.")


class ExternalAPIError(AppException):
    status_code = status.HTTP_502_BAD_GATEWAY

    def __init__(self, api_name: str, status_code: int, message: str):
        self.api_name = api_name
        self.message = message
        super().__init__(
            detail=f"External API '{api_name}' returned status code {status_code}: {message}",
            status_code = status_code
        )


class InvalidResetTokenException(AppException):
    status_code = status.HTTP_400_BAD_REQUEST
    detail = "Reset token has expired or is invalid."


class InvalidImageExtensionException(AppException):
    status_code = status.HTTP_400_BAD_REQUEST
    detail = "Only JPG, PNG and WEBP images are allowed."


class ImageTooLargeException(AppException):
    status_code = status.HTTP_400_BAD_REQUEST
    
    def __init__(self, max_size_mb: int = 10):
        super().__init__(detail=f"Avatar is too large. Max size is {max_size_mb} MB.")

