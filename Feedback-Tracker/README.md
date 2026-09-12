# Feedback Tracker API

A compact Express and MongoDB backend for collecting and managing feedback with authentication and protected writes.

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
- Create, read, update, and delete feedback entries
- Public endpoints for viewing feedback
- Protected create, update, and delete routes
- Centralized logging and error handling

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/feedback-tracker
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

### Feedback

- `GET /api/feedbacks`
- `GET /api/feedbacks/:id`
- `POST /api/feedbacks`
- `PUT /api/feedbacks/:id`
- `DELETE /api/feedbacks/:id`

## Notes

- Feedback creation, update, and delete require JWT authentication.
- The root route returns a simple status response.
- Unknown routes are forwarded to the global error middleware.
