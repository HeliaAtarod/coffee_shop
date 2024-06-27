from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import CreateUserView, ProfileView, OTPLoginView, OTPVerificationView

urlpatterns = [
    path('user/', CreateUserView.as_view(), name='create-user'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('otp-login/', OTPLoginView.as_view(), name='otp-login'),
    path('otp-verify/', OTPVerificationView.as_view(), name='otp-verify'),
    path('token/obtain/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
