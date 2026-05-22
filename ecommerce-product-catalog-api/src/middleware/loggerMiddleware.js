// Print the request method, URL, and time in the console.
const loggerMiddleware = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`${req.method} ${req.originalUrl} - ${time}`);
  next();
};

module.exports = loggerMiddleware;