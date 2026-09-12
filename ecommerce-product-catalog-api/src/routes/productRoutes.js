const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;