const express = require('express');
const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const challengeRoutes = require('./routes/challengeRoutes');

const app = express();
app.use(express.json());
app.use(logger);
app.use('/api/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Fitness Challenge Tracker API - Welcome' });
});
app.use(errorHandler);

module.exports = app;
