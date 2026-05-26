// Any route can pass an error here by calling next(error).
const errorMiddleware = (err, req, res, next) => {
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    statusCode = 400;
  }

  if (err.code === 11000) {
    statusCode = 400;
  }

  let message = err.message || 'Server error';

  if (err.code === 11000) {
    message = 'Duplicate field value';
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorMiddleware;