// Load environment variables from .env file
require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

// Start server
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
