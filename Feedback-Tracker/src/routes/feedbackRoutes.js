const express = require('express');

const protect = require('../middleware/authMiddleware');
const {
  createFeedback,
  getAllFeedbacks,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController');

const router = express.Router();

router.get('/', getAllFeedbacks);
router.get('/:id', getSingleFeedback);
router.post('/', protect, createFeedback);
router.put('/:id', protect, updateFeedback);
router.delete('/:id', protect, deleteFeedback);

module.exports = router;