
# 📝 To-Do List Web App (MERN Stack)

A full-stack **To-Do List web application** built using the **MERN (MongoDB, Express, React, Node.js)** stack. The application allows users to create, edit, delete, and mark tasks as completed. It also provides hands-on experience with full-stack development and deployment workflows.

---

## 🚀 Live Demo

- **Frontend (React)**: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)  
- **Backend (Node + Express)**: [https://your-backend-url.render.com](https://your-backend-url.render.com)

---

## 📌 Project Overview

This project is designed to:

- Apply full-stack development concepts in a real-world app.
- Practice CRUD operations with a React UI and Express API.
- Use MongoDB for data persistence.
- Learn full-stack deployment on platforms like Vercel and Render.
- Improve debugging, UI/UX, and API integration skills.

---

## 📚 Learning Outcomes

- Mastery over **CRUD operations** using REST APIs.
- Frontend-backend integration using **Axios/Fetch**.
- Familiarity with **MongoDB** and **Mongoose**.
- Deployment of frontend and backend on live servers.
- Experience with **React hooks**, `useEffect`, `useState`, etc.
- Improved **UI/UX design** and error handling.

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js, CSS/Tailwind |
| Backend    | Node.js, Express.js |
| Database   | MongoDB (MongoDB Atlas) |
| Deployment | Vercel (Frontend), Render (Backend) |
| Tools      | Git, GitHub, Axios, Postman |

---

## 📁 Folder Structure

project-root/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── .env
│ ├── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── api.js
│ │ └── styles/
│ ├── .env
│ ├── package.json

yaml
Copy
Edit

---

## ✨ Features

- ✅ Add New Tasks
- ✅ Edit Existing Tasks
- ✅ Delete Tasks
- ✅ Mark Tasks as Done
- ✅ View Task List
- ✅ Responsive Design
- ✅ Full-stack Deployment

---

## 📌 API Endpoints (Backend)

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/todos`       | Fetch all tasks     |
| POST   | `/api/todos`       | Create new task     |
| PUT    | `/api/todos/:id`   | Update task         |
| DELETE | `/api/todos/:id`   | Delete task         |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository


git clone https://github.com/your-username/todo-mern-app.git
cd todo-mern-app
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
touch .env
# Add your MongoDB URI in .env
MONGO_URI=your_mongodb_connection_string
PORT=5000

npm run start
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
🚀 Deployment Guide
Frontend: Deploy the React app to Vercel or Netlify.

Backend: Deploy the Express API to Render or Railway.

Use environment variables to store secrets like MONGO_URI.

🎥 Demo Video
📽️ Click here to watch the video demo

Includes:

UI walkthrough

Add/Edit/Delete tasks

Deployment URLs

Code explanation (backend + frontend)

🧠 Future Enhancements
🔐 Add user authentication (JWT)

📱 PWA support for offline usage

🔎 Search and filter todos

🌙 Light/Dark theme toggle

⏰ Due dates and reminders

🙌 Acknowledgements
Project built with guidance and support from DevTown as part of hands-on learning.

