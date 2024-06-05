const Story = require("../models/storyModel");
const mongoose = require("mongoose");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

// API for creating a new story
const createStory = async (req, res) => {
  try {
    const { content } = req.body;
    const imageLocalPath = req?.files?.image?.[0]?.path;
    let image;
    let userID = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    if (imageLocalPath) {
      const cloudinaryResponse = await uploadToCloudinary(imageLocalPath);
      if (cloudinaryResponse) {
        image = cloudinaryResponse.secure_url;
      }
    }

    const story = new Story({
      user: req.user.id,
      content,
      image,
    });

    await story.save();

    return res.status(201).json(story);
  } catch (error) {
    return res.status(500).json({ message: "Error creating story", error });
  }
};

// API to get all stories
const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().populate("user", "username");
    return res.status(200).json(stories);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching stories", error });
  }
};

// API to get a single story by ID
const getStoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid story ID" });
    }

    const story = await Story.findById(id).populate("user", "username");

    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }

    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching story", error });
  }
};

// API to update a story by ID
const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const imageLocalPath = req?.files?.image?.[0]?.path;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid story ID" });
    }

    let story = await Story.findById(id);
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }

    // Delete existing image from Cloudinary if a new one is provided
    if (imageLocalPath && story.image) {
      await deleteFromCloudinary(story.image);
    }

    // Upload new image to Cloudinary
    let image;
    if (imageLocalPath) {
      const cloudinaryResponse = await uploadToCloudinary(imageLocalPath);
      if (cloudinaryResponse) {
        image = cloudinaryResponse.secure_url;
      }
    }

    // Update the story fields
    story.content = content;
    if (image) story.image = image;
    story.updatedAt = Date.now();

    await story.save();

    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ message: "Error updating story", error });
  }
};

const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid story ID" });
    }

    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }

    // Delete image from Cloudinary if it exists
    if (story.image) {
      await deleteFromCloudinary(story.image);
    }

    await Story.findByIdAndDelete(id);

    return res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting story", error });
  }
};

module.exports = {
  createStory,
  getAllStories,
  getStoryById,
  updateStory,
  deleteStory,
};
