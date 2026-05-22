const express = require("express");
const cors = require("cors");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

// Create the Express app.
const app = express();

// Allow requests from other origins.
app.use(cors());
// Read JSON data from incoming requests.
app.use(express.json());
// Print every request in the console.
app.use(loggerMiddleware);

// Home route for testing the server.
app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "E-commerce Product Catalog API is running",
	});
});

// Product and auth routes.
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Handle unknown routes.
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

// Handle errors in one place.
app.use(errorHandler);

module.exports = app;
