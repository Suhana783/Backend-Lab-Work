const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const app = express();
app.use(express.json());

app.use(cors());

app.use(loggerMiddleware);
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '✅ Appointment Booking System API is running!',
  });
});
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use(errorMiddleware);

module.exports = app;
