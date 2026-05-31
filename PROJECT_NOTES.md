🍱 GoodGrub – Smart Surplus Food Redistribution Platform

A zero-waste campus system to redistribute surplus food efficiently using real-time coordination, OTP authentication, and smart notifications.

📁 Project Structure
GoodGrub/
│
├── backend/                          # Django Backend (API Layer)
│   │
│   ├── config/                       # Project Configuration
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   ├── user_auth/                   # Authentication System
│   │   ├── migrations/
│   │   ├── models.py                # OTP Model
│   │   ├── views.py                 # Send & Verify OTP APIs
│   │   ├── urls.py                  # Auth Routes
│   │   └── admin.py
│   │
│   ├── manage.py
│   ├── db.sqlite3
│   ├── .env                         # Email credentials (NOT pushed)
│   └── venv/
│
├── frontend/                         # React Frontend (UI Layer)
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── VerifyOtp.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ForgotPasswordOtp.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DonateFood.jsx
│   │   │   ├── ClaimFood.jsx
│   │   │   ├── NGOs.jsx
│   │   │   └── Profile.jsx
│   │
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── .gitignore
└── project_noted.md
🔐 Authentication Flow
Register Page
   ↓
Send OTP API (Backend)
   ↓
Email OTP Sent (SMTP Gmail)
   ↓
Verify OTP Page (Frontend)
   ↓
Verify OTP API (Backend)
   ↓
User Verified
   ↓
Login Page
   ↓
JWT Authentication
   ↓
Dashboard Access Granted
🧠 Backend Architecture (Django App)
user_auth/
│
├── models.py      → OTP storage + validation
├── views.py       → Send OTP + Verify OTP logic
├── urls.py        → API routing
├── admin.py       → Django admin panel
└── migrations/    → Database history tracking
⚙️ Environment Variables

Create .env file inside backend/:

EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password

⚠️ Never upload .env to GitHub

Check ignore status:

git check-ignore backend/.env

Expected output:

backend/.env
🚀 Git Workflow
git add .
git commit -m "message"
git push origin main

Check history:

git log --oneline

🎯 System Overview (Visual Flow)
Frontend (React)
     ↓
Axios API Calls
     ↓
Backend (Django REST API)
     ↓
OTP + JWT Authentication Layer
     ↓
Database (SQLite / PostgreSQL)
     ↓
Email Service (SMTP Gmail)