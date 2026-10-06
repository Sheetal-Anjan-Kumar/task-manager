# TaskFlow — MERN Task Manager

A full-stack task management web application built with MongoDB, Express.js, React.js, and Node.js.

## Features
- Full REST API with complete CRUD operations (Create, Read, Update, Delete)
- Task status tracking (pending / completed) and priority levels (low / medium / high)
- Due dates with automatic overdue highlighting
- Weekly completion chart showing productivity trends
- Fully responsive UI with reusable React components

## Tech Stack
**Frontend:** React.js, Axios, CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB (via Mongoose)

## Project Structure
task-manager/
├── backend/
│ ├── models/Task.js # Mongoose schema
│ ├── routes/tasks.js # REST API routes (CRUD)
│ └── server.js # Express server entry point
└── frontend/
└── src/
├── components/ # Reusable React components
├── api.js # Axios API calls
└── App.js # Main app logic
## Getting Started

### Backend
```bash
cd backend
npm install
# create a .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints
| Method | Endpoint          | Description      |
|--------|-------------------|-------------------|
| GET    | /api/tasks        | Get all tasks     |
| POST   | /api/tasks        | Create a task     |
| PUT    | /api/tasks/:id    | Update a task     |
| DELETE | /api/tasks/:id    | Delete a task     |
