# E-commerce Product Catalog API

A simple beginner-friendly backend project for the BCA207 Web Development Backend Lab Work.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Folder Structure

```text
ecommerce-product-catalog-api/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── app.js
├── .env
├── .env.example
├── .gitignore
├── server.js
├── package.json
├── read.md
```

## What Each Folder Is For

- `src/config/` - database connection and other setup files.
- `src/controllers/` - request handling logic for auth and products.
- `src/models/` - MongoDB schemas made with Mongoose.
- `src/routes/` - API route definitions.
- `src/middleware/` - code that runs before controllers, like auth and logging.
- `src/utils/` - helper files for small shared functions.
- `src/app.js` - main Express app setup.
- `server.js` - starts the server and connects the database.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create or update `.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce-product-catalog
JWT_SECRET=your_jwt_secret_here
```

3. Start the server:

```bash
npm run dev
```

## Available Scripts

- `npm start` - run the server.
- `npm run dev` - run the server with nodemon.

## API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Products

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Example JSON Payloads

### Register

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Create Product

```json
{
  "title": "Running Shoes",
  "description": "Comfortable shoes for daily running.",
  "price": 2999,
  "category": "Shoes",
  "stock": 10,
  "image": "https://example.com/shoes.jpg"
}
```

## Simple Request Flow

Request -> Route -> Controller -> Database -> Response

## Notes

- `POST`, `PUT`, and `DELETE` product routes are protected by JWT.
- `GET` product routes are public.
- Passwords are stored in hashed form, not plain text.
