// Global error handler
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
  // call next() only if you want to delegate to other handlers (not needed here)
};
