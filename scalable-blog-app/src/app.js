const express = require('express');
const connectDB = require('./config/db');
const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use(logger);
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Scalable Blog App API' });
});
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use(errorHandler);

module.exports = app;
