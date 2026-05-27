// Express app setup
const express = require('express');
const connectDB = require('./config/db');
const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(logger);

// default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Scalable Blog App API' });
});

// routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// error handler (should be last middleware)
app.use(errorHandler);

module.exports = app;
