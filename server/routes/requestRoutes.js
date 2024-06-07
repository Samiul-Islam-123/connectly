const express = require('express');
const router = express.Router();
const {
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  followUser,
  unfollowUser
} = require('../controllers/requestController');

router.post('/sendFriendRequest', sendFriendRequest);
router.post('/cancelFriendRequest', cancelFriendRequest);
router.post('/acceptFriendRequest', acceptFriendRequest);
router.post('/rejectFriendRequest', rejectFriendRequest);
router.post('/followUser', followUser);
router.post('/unfollowUser', unfollowUser);

module.exports = router;
