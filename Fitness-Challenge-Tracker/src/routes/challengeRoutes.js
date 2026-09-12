const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  createChallenge,
  getAllChallenges,
  getChallenge,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challengeController');
router.get('/', getAllChallenges);
router.get('/:id', getChallenge);
router.post('/', protect, createChallenge);
router.put('/:id', protect, updateChallenge);
router.delete('/:id', protect, deleteChallenge);

module.exports = router;
