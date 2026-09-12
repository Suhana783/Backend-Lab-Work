# Fitness Challenge Tracker API

A beginner-friendly backend for managing fitness challenges with user authentication and protected challenge operations.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

## Main Features

- User registration and login
- Create, read, update, and delete challenges
- Public routes for browsing challenge data
- Protected routes for creating, updating, and deleting challenges
- Simple request logging and error handling

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fitness-challenge-tracker
JWT_SECRET=your_jwt_secret_here
```

3. Start the server:

```bash
npm run dev
```

## API Routes

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Challenges

- `GET /api/challenges`
- `GET /api/challenges/:id`
- `POST /api/challenges`
- `PUT /api/challenges/:id`
- `DELETE /api/challenges/:id`

## Notes

- Challenge create, update, and delete routes require a valid JWT.
- The app starts from `server.js` and connects to MongoDB before running.
- The home route returns a short API welcome message.
