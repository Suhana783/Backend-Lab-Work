# Scalable Blog App API

A simple backend for building and managing blog posts with authentication, protected writes, and ownership-based updates.

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
- Create, read, update, and delete blog posts
- Public blog listing and detail routes
- Search, category filtering, and sorting on blog lists
- Ownership checks for updating and deleting posts

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/scalable-blog-app
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

### Blogs

- `GET /api/blogs`
- `GET /api/blogs/:id`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`

## Notes

- Blog create, update, and delete routes require a JWT.
- Update and delete actions are restricted to the blog author.
- The app starts from `server.js` and loads the Express app from `src/app.js`.
