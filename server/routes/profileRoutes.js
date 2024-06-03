// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authController = require('../controllers/authController');

// Profile routes
router.post('/', authController.authenticate, profileController.createProfile); // Create profile
router.get('/me', authController.authenticate, profileController.getCurrentProfile); // Get current user's profile
router.get('/:userId', profileController.getProfileById); // Get profile by user ID
router.put('/', authController.authenticate, profileController.updateProfile); // Update profile
router.delete('/', authController.authenticate, profileController.deleteProfile); // Delete profile

module.exports = router;
