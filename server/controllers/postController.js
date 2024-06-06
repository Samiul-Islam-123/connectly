const Post = require("../models/postModel");
const mongoose = require("mongoose");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

const createPost = async (req, res) => {
  try {
    const { user, content } = req.body;
    const imageLocalPath = req?.files?.image?.[0]?.path;
    let image;

    if (imageLocalPath) {
      const cloudinaryResponse = await uploadToCloudinary(imageLocalPath);
      if (cloudinaryResponse) {
        image = cloudinaryResponse.secure_url;
      }
    }

    let userID = req.user.id;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const post = new Post({
      user: req.user.id,
      content,
      image,
    });

    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "Error creating post", error });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username")
      .populate("comments.user", "username");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching posts", error });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(id)
      .populate("user", "username")
      .populate("comments.user", "username");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching post", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const imageLocalPath = req?.files?.image?.[0]?.path;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    let post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete existing image from Cloudinary if a new one is provided
    if (imageLocalPath && post.image) {
      await deleteFromCloudinary(post.image);
    }

    // Upload new image to Cloudinary
    let image;
    if (imageLocalPath) {
      const cloudinaryResponse = await uploadToCloudinary(imageLocalPath);
      if (cloudinaryResponse) {
        image = cloudinaryResponse.secure_url;
      }
    }

    // Update the post fields
    post.content = content;
    if (image) post.image = image;
    post.updatedAt = Date.now();

    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: "Error updating post", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.image) {
      await deleteFromCloudinary(post.image);
    }

    await Post.findByIdAndDelete(id);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting post", error });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
