const express = require('express');
const router = express.Router();
const Post = require('../Model/BlogModel'); // Adjust the path to match your project structure

router.get('/all-posts', async (req, res) => {
  try {
    const allPosts = await Post.find();

    res.status(200).json({ message: 'All posts retrieved successfully', posts: allPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
