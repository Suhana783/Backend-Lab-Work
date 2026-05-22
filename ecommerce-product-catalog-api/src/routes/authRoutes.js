const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

// Create a router for auth APIs.
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;