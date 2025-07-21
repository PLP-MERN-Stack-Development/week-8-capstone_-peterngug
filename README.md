📦 Project Structure
event-elegance/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
└── README.md

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/PLP-MERN-Stack-Development/week-8-capstone_-peterngug.git
cd event-elegance

2. Setup Backend
a. Install dependencies
cd backend
npm install
b. Create .env file
PORT=5000
MONGODB_URI=mongodb://localhost/eventEleganceDB

c. Start the server
node app.js

3. Setup Frontend
a. Install dependencies
cd ../frontend
npm install

b. Start the development server
npm run dev
Open your browser and go to:
http://localhost:5173

Deployment: Frontend :week-8-capstone-peterngug3.vercel.app
            Backend  :https://week-8-capstone-peterngug-backend.onrender.com
