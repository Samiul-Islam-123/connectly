const Story = require('../models/storyModel');
const mongoose = require('mongoose');

// API for creating a new story
const createStory = async (req, res) => {
  try {
    const { user, content, image } = req.body;
    let userID = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const story = new Story({
      user: req.user.id,
      content,
      image
    });

    await story.save();

    return res.status(201).json(story);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating story', error });
  }
};

// API to get all stories
const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().populate('user', 'username');
    return res.status(200).json(stories);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching stories', error });
  }
};

// API to get a single story by ID
const getStoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid story ID' });
    }

    const story = await Story.findById(id).populate('user', 'username');

    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching story', error });
  }
};

// API to update a story by ID
const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid story ID' });
    }

    const story = await Story.findByIdAndUpdate(
      id,
      { content, image, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating story', error });
  }
};

// API to delete a story by ID
const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid story ID' });
    }

    const story = await Story.findByIdAndDelete(id);

    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    return res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting story', error });
  }
};

module.exports = {
  createStory,
  getAllStories,
  getStoryById,
  updateStory,
  deleteStory
};
