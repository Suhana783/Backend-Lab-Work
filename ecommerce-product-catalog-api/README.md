# E-commerce Product Catalog API

A simple beginner-friendly backend for managing products with user authentication and protected product actions.

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
- Create, read, update, and delete products
- Public product read routes
- Protected create, update, and delete routes using JWT
- Filtering by category and sorting by price

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce-product-catalog
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

### Products

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Notes

- Product write routes are protected by JWT.
- The app uses a basic Express setup with CORS, JSON parsing, logging, and error handling.
- If you want the older documentation, `read.md` is still in the folder, but this project now also has a standard `README.md`.
