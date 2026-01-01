# NutriTrack - Diet & Nutrition Tracking System

A MERN stack web application for tracking diet and nutrition with personalized insights.

## Project Structure

```
Diet-Nutrition-Web-app/
├── backend/          # Express.js server
└── frontend/         # React + Vite application
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
yarn install
```

3. Start the server:
```bash
node server.js
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
npx vite
```

The frontend will run on `http://localhost:3000`

## Features

- 🏠 **Landing Page** with hero section
- 📊 **Meal Tracking** visualization
- 🎯 **Goal Setting** interface
- 📈 **Progress Dashboard**
- 🍳 **Recipe Discovery**
- 💬 **Success Stories** testimonials

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Material Symbols Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Environment Variables

Backend `.env` file is already configured with MongoDB connection string.

## Running the Application

1. Start backend: `cd backend && node server.js`
2. Start frontend: `cd frontend && npx vite`
3. Open browser to `http://localhost:3000`

## Next Steps

After the landing page is complete, additional features will be implemented:
- User authentication
- Meal logging
- Nutrition tracking
- Recipe management
- Progress analytics
