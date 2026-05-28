📌 Good_Grub – Smart Surplus Food Redistribution Platform
🌍 Overview

Good_Grub is a full-stack web application designed to reduce food waste and connect surplus food providers with NGOs, volunteers, and beneficiaries.
It helps campuses and communities efficiently redistribute excess food in real-time.

🚀 Features
👤 User Registration & Login system
🔐 Authentication (frontend + backend connected)
🍲 Food Donation Posting system
📍 Location-based food sharing
🏢 NGO & Beneficiary management
📊 Dashboard for tracking activities
📬 Contact & support system
🔔 Real-time notifications (planned/expanding)
🛠️ Tech Stack
Frontend:
React.js
React Router DOM
Axios
Tailwind CSS
Backend:
Python
Flask
Flask-CORS
Future Enhancements:
MongoDB / MySQL database
JWT authentication
Real-time notifications
Deployment (Vercel + Render)

📁 Project Structure

goodgrub-learning/
│
├── backend/
│   ├── app.py
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


⚙️ How to Run Project Locally

1️⃣ Clone repository
git clone https://github.com/your-username/goodgrub.git

2️⃣ Run Backend
cd backend
py app.py
Backend runs at: http://127.0.0.1:5000


3️⃣ Run Frontend
cd frontend
npm install
npm run dev

Frontend runs at: http://localhost:5173
🔗 API Connection

Frontend communicates with backend using:

baseURL: "http://127.0.0.1:5000/"

Example API:

/api/test
/api/register
/api/login
🎯 Current Progress

✔ Frontend pages created
✔ Backend Flask setup
✔ API connection established
✔ Login/Register structure implemented
✔ Axios integration done

🚧 Work in Progress
Authentication validation (login/register logic)
Database integration
Role-based access (NGO / User / Volunteer)
Food donation tracking system
👩‍💻 Developer
Simran Kumari
Passionate about full-stack development & real-world problem solving
⭐ Future Goal

To build a complete zero-waste food redistribution platform for campuses and communities.

📌 Note

This project is currently in active development.
