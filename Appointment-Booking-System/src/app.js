const express = require('express');
const cors = require('cors');

// Import middleware
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

// Import routes
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Create Express application
const app = express();

// Middleware
app.use(express.json());

app.use(cors());

app.use(loggerMiddleware);

// Home route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '✅ Appointment Booking System API is running!',
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// Appointment routes
app.use('/api/appointments', appointmentRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use(errorMiddleware);

module.exports = app;
