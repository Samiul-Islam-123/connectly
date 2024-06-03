const Post = require('../models/Post');
const mongoose = require('mongoose');

// api for creating a new post
const createPost = async (req, res) => {
  try {
    const { user, content, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const post = new Post({
      user,
      content,
      image
    });

    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating post', error });
  }
};

// api to Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username').populate('comments.user', 'username');
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// api to Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid post ID' });
    }

    const post = await Post.findById(id).populate('user', 'username').populate('comments.user', 'username');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching post', error });
  }
};

//api to Update a post by ID
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid post ID' });
    }

    const post = await Post.findByIdAndUpdate(
      id,
      { content, image, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating post', error });
  }
};

//api to Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid post ID' });
    }

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting post', error });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
