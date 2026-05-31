from django.shortcuts import render
from django.core.mail import send_mail

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import OTP
import random


@api_view(['POST'])
def send_otp(request):
    email = request.data.get("email")

    if not email:
        return Response(
            {"success": False, "message": "Email is required"},
            status=400
        )

    otp_code = str(random.randint(100000, 999999))

    user, created = User.objects.get_or_create(
        username=email,
        defaults={"email": email}
    )

    OTP.objects.create(
        user=user,
        code=otp_code
    )

    send_mail(
        subject="Good_Grub OTP Verification",
        message=f"Your OTP is: {otp_code}",
        from_email=None,
        recipient_list=[email],
        fail_silently=False,
    )

    return Response({
        "success": True,
        "message": "OTP sent successfully"
    })

@api_view(['POST'])
def verify_otp(request):
    email = request.data.get("email")
    otp = request.data.get("otp")

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({
            "success": False,
            "message": "User not found"
        }, status=404)

    otp_exists = OTP.objects.filter(
        user=user,
        code=otp
    ).exists()

    if otp_exists:
        return Response({
            "success": True,
            "message": "OTP verified successfully"
        })

    return Response({
        "success": False,
        "message": "Invalid OTP"
    }, status=400)