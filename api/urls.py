from django.urls import path

from api.views import CreateUserView, ProfileView, OTPLoginView, OTPVerificationView

urlpatterns = [
    path('user/', CreateUserView.as_view(), name='create-user'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('otp-login/', OTPLoginView.as_view(), name='otp-login'),
    path('otp-verify/', OTPVerificationView.as_view(), name='otp-verify'),
]
