require("dotenv").config();

// Import the Express app and the database connection function.
const app = require("./src/app");
const connectDB = require("./src/config/db");

// Read the port number from .env, or use 5000 if it is missing.
const PORT = process.env.PORT || 5000;

// Start the server after the database connection is ready.
const startServer = async () => {
	try {
		// Connect to MongoDB first.
		await connectDB();

		// Start listening for incoming requests.
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		// Show a simple error message if the server cannot start.
		console.error("Server failed to start:", error.message);
	}
};

// Call the function to start everything.
startServer();
