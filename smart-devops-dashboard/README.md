# Smart DevOps Dashboard

A full-stack authentication system for a DevOps dashboard built with React, Node.js, Express, MongoDB, and JWT authentication.

## Tech Stack

- **Frontend**: React (Vite) + React Router + Axios + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Authentication**: JWT based login/logout system
- **Password Hashing**: bcrypt

## Features

- User Registration and Login
- JWT Token-based Authentication
- Protected Routes
- Responsive UI with Custom Dark Theme
- Password Hashing with bcrypt
- MongoDB Database Integration

## Project Structure

```
smart-devops-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally on default port 27017)
- npm or yarn

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd smart-devops-dashboard/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory (already created with default values):

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/smart-devops-dashboard
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. Start MongoDB locally (if not already running).

5. Start the backend server:

   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd smart-devops-dashboard/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`.

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - User registration
  - Body: `{ "username": "string", "email": "string", "password": "string" }`

- `POST /api/auth/login` - User login
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "jwt_token", "user": { "id": "string", "username": "string", "email": "string" } }`

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Register a new account or login with existing credentials
3. Upon successful login, you'll be redirected to the dashboard
4. Use the logout button to sign out

## Color Palette

The application uses a custom dark theme with the following colors:

- Primary Dark Background: #0A2328
- Card Background: #0F2E34
- Accent Aqua: #3AAFA9
- Soft Aqua Hover: #66D2C7
- Highlight Yellow: #FFD166
- Text Primary: #F7F9FA
- Text Secondary: #9FB3B6

## Logo

The project features a custom SVG logo designed specifically for the Smart DevOps Dashboard:

- **Design**: Infinity symbol with circuit board patterns and glowing tech lines
- **Colors**: Deep teal gradient (#3AAFA9 to #66D2C7) with neon glow effects
- **Elements**: Small rocket on top-right curve symbolizing CI/CD and automation
- **Typography**: "Smart DevOps" in gradient text, "Dashboard" below
- **Usage**: Integrated in login/register pages, dashboard header, and favicon

## Security Features

- Passwords are hashed using bcrypt before storage
- JWT tokens are used for session management with 1-day expiry
- Protected routes ensure only authenticated users can access the dashboard
- Input validation on both frontend and backend

## Development

- Frontend uses Vite for fast development and hot reloading
- Backend uses nodemon for automatic server restarts during development
- Tailwind CSS for styling with custom color extensions
- Axios for HTTP requests with automatic proxy to backend API

## Production Deployment

For production deployment:

1. Build the frontend:

   ```bash
   cd frontend
   npm run build
   ```

2. Serve the built files from your backend or a static file server
3. Set environment variables appropriately
4. Use a production MongoDB instance
5. Implement HTTPS and proper CORS settings

## License

This project is for educational purposes.
