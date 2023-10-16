const express = require('express');
const router = express.Router();
const Post = require('../Model/BlogModel'); // Adjust the path to match your project structure

router.post('/create-post', async (req, res) => {
  try {
    const { title, imgurl, description } = req.body;

    const currentDate = new Date(); // Get the current date and time
    const newPost = new Post({ title, imgurl, description });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
