const express = require('express');

const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Feedback Tracker API is running',
	});
});

app.use('/api/auth', authRoutes);
app.use('/api/feedbacks', feedbackRoutes);

// Send unknown routes to the global error middleware.
app.use((req, res, next) => {
	res.status(404);
	next(new Error(`Route not found: ${req.originalUrl}`));
});

app.use(errorMiddleware);

module.exports = app;
