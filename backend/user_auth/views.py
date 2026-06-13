from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib.auth import authenticate

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


    # user, created = User.objects.get_or_create(
    #     username=email,
    #     defaults={"email": email}
    # )

    user = User.objects.filter(username=email).first()

    if not user:
        return Response({
            "success": False,
            "message": "User not registered"
        }, status=404)

    otp_code = str(random.randint(100000, 999999))
    
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

# @api_view(['POST'])
# def verify_otp(request):
#     email = request.data.get("email")
#     otp = request.data.get("otp")

#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({
#             "success": False,
#             "message": "User not found"
#         }, status=404)

#     otp_exists = OTP.objects.filter(
#         user=user,
#         code=otp
#     ).exists()

#     if otp_exists:
#         return Response({
#             "success": True,
#             "message": "OTP verified successfully"
#         })

#     return Response({
#         "success": False,
#         "message": "Invalid OTP"
#     }, status=400)

@api_view(['POST'])
def verify_otp(request):
    email = request.data.get("email")
    otp = request.data.get("otp")

    print("EMAIL:", email)
    print("OTP RECEIVED:", otp)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        print("USER NOT FOUND")
        return Response({
            "success": False,
            "message": "User not found"
        }, status=404)

    otp_exists = OTP.objects.filter(
        user=user,
        code=otp
    ).exists()

    print("OTP EXISTS:", otp_exists)

    if otp_exists:
        return Response({
            "success": True,
            "message": "OTP verified successfully"
        })

    return Response({
        "success": False,
        "message": "Invalid OTP"
    }, status=400)

# @api_view(['POST'])
# def register(request):
#     print("REGISTER API CALLED")
    
#     full_name = request.data.get("fullName")
#     email = request.data.get("email")
#     password = request.data.get("password")

#     try:
#         user = User.objects.get(username=email)

#         user.first_name = full_name
#         user.email = email
#         user.set_password(password)
#         user.save()

#         return Response({
#             "success": True,
#             "message": "User registered successfully"
#         })

#     except User.DoesNotExist:
#         return Response({
#             "success": False,
#             "message": "User not found"
#         }, status=404)
    


@api_view(['POST'])
def register(request):
    full_name = request.data.get("fullName")
    email = request.data.get("email")
    password = request.data.get("password")

    if User.objects.filter(username=email).exists():
        return Response({
            "success": False,
            "message": "User already exists"
        }, status=400)

    user = User.objects.create_user(
        username=email,
        email=email,
        password=password
    )

    user.first_name = full_name
    user.save()

    return Response({
        "success": True,
        "message": "User registered successfully"
    })


# @api_view(['POST'])
# def login_user(request):
#     email = request.data.get("email")
#     password = request.data.get("password")

#     user = authenticate(
#         username=email,
#         password=password
#     )

#     if user is not None:
#         return Response({
#             "success": True,
#             "message": "Login successful",
#             "username": user.username
#         })

#     return Response({
#         "success": False,
#         "message": "Invalid email or password"
#     }, status=400)

# @api_view(['POST'])
# def login_user(request):
#     email = request.data.get("email")
#     password = request.data.get("password")

#     print("LOGIN EMAIL:", email)
#     print("LOGIN PASSWORD:", password)

#     user = authenticate(
#         username=email,
#         password=password
#     )

#     print("AUTHENTICATED USER:", user)

#     if user is not None:
#         return Response({
#             "success": True,
#             "message": "Login successful",
#             "username": user.username
#         })

#     return Response({
#         "success": False,
#         "message": "Invalid email or password"
#     }, status=400)


@api_view(['POST'])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")

    print("LOGIN:", email, password)

    user = authenticate(username=email, password=password)

    print("AUTH RESULT:", user)

    # if user:
    #     return Response({
    #         "success": True,
    #         "message": "Login successful"
    #     })

    if user:
        return Response({
            "success": True,
            "message": "Login successful",
            "username": user.first_name,
            "email": user.email
        })

    return Response({
        "success": False,
        "message": "Invalid email or password"
    }, status=400)