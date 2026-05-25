const Challenge = require('../models/Challenge');

// Create a new challenge (protected)
exports.createChallenge = async (req, res, next) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).json({ success: true, data: challenge });
  } catch (error) {
    next(error);
  }
};

// Get all challenges (with simple filtering and sorting)
exports.getAllChallenges = async (req, res, next) => {
  try {
    const { category, status, sort } = req.query;
    const query = {};
    if (category) query.category = category;
    if (status) query.status = status;

    let challengesQuery = Challenge.find(query);

    // simple sorting by duration
    if (sort === 'duration') {
      challengesQuery = challengesQuery.sort({ duration: 1 });
    }

    const challenges = await challengesQuery;
    res.json({ success: true, count: challenges.length, data: challenges });
  } catch (error) {
    next(error);
  }
};

// Get single challenge
exports.getChallenge = async (req, res, next) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    res.json({ success: true, data: challenge });
  } catch (error) {
    next(error);
  }
};

// Update challenge (protected)
exports.updateChallenge = async (req, res, next) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json({ success: true, data: challenge });
  } catch (error) {
    next(error);
  }
};

// Delete challenge (protected)
exports.deleteChallenge = async (req, res, next) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json({ success: true, message: 'Challenge removed' });
  } catch (error) {
    next(error);
  }
};
