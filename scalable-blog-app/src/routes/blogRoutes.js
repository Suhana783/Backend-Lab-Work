const express = require('express');
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
