🧩 Overview
Freelance Marketplace is a full-stack web application where users can:

Register as employers or job seekers

Post and apply to jobs

Receive real-time notifications

Manage authentication, roles, and dashboards

🚀 Tech Stack
🖥️ Frontend
React 19 + Vite

Redux Toolkit + RTK Query

React Hook Form + Yup

Tailwind CSS

React Router DOM v7 (with lazy loading)

React Toastify (for notifications)

MUI (Material UI) (for components)

⚙️ Backend
Laravel 11

Laravel Sanctum (auth)

Laravel WebSockets (real-time notifications)

Eloquent ORM with model relationships



📁 Project Structure 
src/
├── assets/                  # Static images, fonts, etc.
├── components/              # Reusable UI components
├── pages/                   # Route-level components (Home, Login, Register)
├── features/                # 🆕 Modular folders by role/domain
│   ├── admin/              
│   ├── user/
├── store/                   # Redux slices and RTK Query APIs
│   ├── slices/              # authSlice, etc.
│   └── api/                 # baseQuery, authApi, etc.
├── hooks/                   # Custom React hooks
├── utils/
│   ├── api/                 # endpoints.js, getBaseURL.js
│   ├── constants.js
│   └── routes/              # routePaths.js
└── App.jsx / main.jsx       # Entry points



🌐 Environment Setup
🧪 Prerequisites
Node.js >= 18

Laravel backend (e.g. http://localhost:8000)

.env file

📦 Installation

# Clone the repo
git clone https://github.com/rao19536/freelance_marketplace_frontend.git
cd freelance-marketplace

# Install dependencies
npm install

# Start the frontend
npm run dev
