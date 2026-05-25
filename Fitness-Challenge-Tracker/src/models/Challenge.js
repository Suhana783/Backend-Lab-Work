const mongoose = require('mongoose');

// Challenge schema - simple and beginner friendly
const challengeSchema = new mongoose.Schema({
  challengeName: {
    type: String,
    required: [true, 'Please provide a challenge name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
  target: {
    type: Number,
    required: [true, 'Please provide a target value (e.g., steps)'],
  },
  duration: {
    type: Number,
    required: [true, 'Please provide duration in days'],
  },
  startDate: {
    type: Date,
  },
  status: {
    type: String,
    default: 'Active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Challenge', challengeSchema);
