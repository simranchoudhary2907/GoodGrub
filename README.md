# 📌 Good_Grub – Smart Surplus Food Redistribution Platform

## 🌍 Overview

Good_Grub is a full-stack web application designed to reduce food waste by connecting surplus food providers with NGOs, volunteers, and beneficiaries.

The platform helps campuses and communities efficiently redistribute excess food, coordinate pickups, and track food donations in real time.

---

## 🚀 Features

### 👤 Authentication
- User Registration
- User Login
- JWT Authentication
- Email OTP Verification
- Forgot Password Flow
- Protected Routes

### 🍲 Food Management
- Food Donation Posting
- Food Claiming System
- Active Donations Tracking
- Food Sharing Coordination

### 🏢 Community Support
- NGO Directory
- Beneficiary Management
- Volunteer Registration
- Community Outreach Features

### 📊 Dashboard & Tracking
- User Dashboard
- Activity Logs
- Profile Management
- Donation Monitoring

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Python
- Django
- Django REST Framework
- Simple JWT
- SQLite (Development)

### Authentication
- JWT Tokens
- Email OTP Verification
- Gmail SMTP Integration

---

## 📁 Project Structure

```text
goodgrub-learning/
│
├── backend/
│   ├── config/
│   ├── user_auth/
│   ├── manage.py
│   ├── db.sqlite3
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api.js
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone <(https://github.com/simranchoudhary2907/GoodGrub)>
cd goodgrub-learning
```

### 2️⃣ Backend Setup

```bash
cd backend

source venv/Scripts/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend:

```text
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

### Authentication

```text
POST /api/auth/send-otp/
POST /api/auth/verify-otp/

POST /api/register/
POST /api/login/
```

---

## 🎯 Current Progress

### ✅ Completed

- React Frontend Setup
- Django Backend Setup
- Django REST Framework Integration
- JWT Authentication Setup
- Email OTP Sending
- OTP Verification API
- Gmail SMTP Configuration
- Login & Register UI
- Protected Routes
- Multiple Core Pages Implemented

### 🚧 In Progress

- Signup OTP Frontend Integration
- Complete Registration Flow
- Food Donation Backend APIs
- NGO Management System
- Volunteer Workflow
- Analytics Dashboard

### 🔮 Planned Features

- Real-Time Notifications
- Advanced Analytics
- Campus Event Integration
- Surplus Food Recommendations
- Production Deployment

---

## 👩‍💻 Developer

**Simran Kumari**

Passionate about Full-Stack Development, Problem Solving, and Building Real-World Impact Projects.

---

## ⭐ Project Goal

Build a complete zero-waste food redistribution platform that helps campuses and communities reduce food waste while supporting people in need.

---

## 📌 Status

This project is actively under development and continuously improving.
