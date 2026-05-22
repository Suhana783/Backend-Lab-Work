const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Create a router for product APIs.
const router = express.Router();

// Public routes.
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

// Protected routes.
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;