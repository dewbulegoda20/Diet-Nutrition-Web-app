# Frontend Setup Instructions

## Running the Frontend

1. Install dependencies:
```bash
cd frontend
yarn install
# or
npm install
```

2. Start the development server:
```bash
npx vite
```

The frontend will run on `http://localhost:3000`

## Pages

- **Home** (`/`) - Landing page with all sections
- **Login** (`/login`) - User login page
- **Sign Up** (`/signup`) - User registration page

## Features

✅ React Router navigation
✅ Login/Signup forms with validation
✅ API integration with backend
✅ Error handling and loading states
✅ JWT token storage in localStorage
✅ Responsive design
✅ All images and styling from design

## Dependencies

- **react-router-dom** - Client-side routing
- **axios** - HTTP requests to backend API
- **tailwindcss** - Styling
- **vite** - Build tool

## API Configuration

The frontend connects to the backend at `http://localhost:5000`

If you need to change this, update the axios calls in:
- `src/pages/Login.jsx`
- `src/pages/Signup.jsx`
