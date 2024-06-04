const express = require('express');
const router = express.Router();
const friendRequestController = require('../controllers/requestController');

// Send a friend request
router.post('/send', friendRequestController.sendFriendRequest);

// Accept a friend request
router.post('/accept', friendRequestController.acceptFriendRequest);

// Reject a friend request
router.post('/reject', friendRequestController.rejectFriendRequest);

module.exports = router;
