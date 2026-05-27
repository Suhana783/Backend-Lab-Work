const Blog = require('../models/Blog');

// Create blog (protected)
exports.createBlog = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    if (!title || !content || !category) {
      return res.status(400).json({ message: 'Title, content and category are required' });
    }

    const blog = new Blog({
      title,
      content,
      category,
      tags: tags || [],
      author: req.user.id,
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created', blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all blogs (with search, filter, sort)
exports.getAllBlogs = async (req, res) => {
  try {
    const { search, category, sort } = req.query;
    const query = {};
    if (search) query.title = { $regex: search, $options: 'i' };
    if (category) query.category = category;

    let blogsQuery = Blog.find(query).populate('author', 'name email');
    if (sort) blogsQuery = blogsQuery.sort({ [sort]: -1 });

    const blogs = await blogsQuery.exec();
    res.json({ count: blogs.length, blogs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single blog by id
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name email');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update blog (protected, simple ownership check)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // simple ownership: only author can update
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { title, content, category, tags } = req.body;
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    blog.tags = tags || blog.tags;

    await blog.save();
    res.json({ message: 'Blog updated', blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete blog (protected, ownership)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await blog.remove();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
