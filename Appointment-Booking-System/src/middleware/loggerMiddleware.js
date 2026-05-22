// Logger middleware

const loggerMiddleware = (req, res, next) => {
  const currentTime = new Date().toLocaleTimeString();

  console.log(`${req.method} ${req.path} - ${currentTime}`);

  next();
};

module.exports = loggerMiddleware;
