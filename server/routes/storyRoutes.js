const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const authController = require('../controllers/authController');

// Routes for stories
router.post('/', authController.authenticate, storyController.createStory);
router.get('/', authController.authenticate, storyController.getAllStories);
router.get('/:id', authController.authenticate, storyController.getStoryById);
router.put('/:id', authController.authenticate, storyController.updateStory);
router.delete('/:id', authController.authenticate, storyController.deleteStory);

module.exports = router;
