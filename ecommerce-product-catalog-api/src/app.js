const express = require("express");
const cors = require("cors");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "E-commerce Product Catalog API is running",
	});
});
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});
app.use(errorHandler);

module.exports = app;
