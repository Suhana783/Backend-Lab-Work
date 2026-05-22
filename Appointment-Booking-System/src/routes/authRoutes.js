const express = require('express');
const { register, login } = require('../controllers/authController');

// Create router
const router = express.Router();

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

module.exports = router;
