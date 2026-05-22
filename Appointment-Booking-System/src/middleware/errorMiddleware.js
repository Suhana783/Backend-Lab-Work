// Error handling middleware

const errorMiddleware = (err, req, res, next) => {
  console.log('❌ Error:', err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorMiddleware;
