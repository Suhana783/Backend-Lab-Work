# Backend Lab Work

Welcome to the Backend Lab Work repository. This workspace contains 5 individual backend applications built with Node.js, Express.js, and MongoDB, and deployed separately on Render.

## Projects Overview & Live Deployment Links

| Project Name | Folder Directory | Live Deployment URL |
| --- | --- | --- |
| Appointment Booking System | [./Appointment-Booking-System](Appointment-Booking-System) | https://appointment-booking-system-d9z4.onrender.com |
| Feedback Tracker | [./Feedback-Tracker](Feedback-Tracker) | https://feedback-tracker-0fii.onrender.com |
| Fitness Challenge Tracker | [./Fitness-Challenge-Tracker](Fitness-Challenge-Tracker) | https://fitness-challenge-tracker-4f7c.onrender.com |
| E-commerce Product Catalog API | [./ecommerce-product-catalog-api](ecommerce-product-catalog-api) | https://ecommerce-product-catalog-api-coh5.onrender.com |
| Scalable Blog App | [./scalable-blog-app](scalable-blog-app) | https://scalable-blog.onrender.com |

## Tech Stack

- Runtime Environment: Node.js
- Framework: Express.js
- Database: MongoDB and Mongoose
- Authentication: JSON Web Tokens (JWT) and bcryptjs
- Deployment Platform: Render

## Directory Structure

```text
Backend-Lab-Work/
├── Appointment-Booking-System/
├── Feedback-Tracker/
├── Fitness-Challenge-Tracker/
├── ecommerce-product-catalog-api/
└── scalable-blog-app/
```

## Local Development Setup

To run any of the backend services locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Suhana783/Backend-Lab-Work.git
```

2. Navigate into the specific project folder:

```bash
cd Appointment-Booking-System
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

Create a `.env` file in the project folder and add the required variables.

For most projects:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

For the Appointment Booking System project, use:

```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. Start the server:

```bash
npm run dev
```

## Project Notes

- Each project is a separate backend API with its own routes, controllers, models, and middleware.
- Authentication is handled with JWT in the projects that require protected routes.
- The APIs are designed to stay beginner-friendly and easy to run locally.
- Individual project README files are also available inside each folder if you want more specific details.
