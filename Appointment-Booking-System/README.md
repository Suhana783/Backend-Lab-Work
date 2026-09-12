# Appointment Booking System API

A simple backend for managing appointment bookings with user authentication and protected appointment actions.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- cors
- dotenv

## Main Features

- User registration and login
- Create, read, update, and delete appointments
- Public read endpoints for appointment listings and details
- Protected create, update, and delete routes using JWT
- Basic filtering and sorting for appointment data

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```env
PORT=5000
MONGO_DB_URI=mongodb://127.0.0.1:27017/appointment-booking
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

### Appointments

- `GET /api/appointments`
- `GET /api/appointments/:id`
- `POST /api/appointments`
- `PUT /api/appointments/:id`
- `DELETE /api/appointments/:id`

## Notes

- Appointment create, update, and delete actions require a Bearer token.
- The app uses a simple Express setup with logger and error middleware.
- Database connection is handled from the server entry point.
