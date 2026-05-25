const express = require('express');
const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const challengeRoutes = require('./routes/challengeRoutes');

const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// Simple request logger
app.use(logger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Fitness Challenge Tracker API - Welcome' });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
