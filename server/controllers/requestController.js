const Profile = require("../models/profileModel");

const sendFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const senderProfile = await Profile.findOne({ user: senderId });
    const receiverProfile = await Profile.findOne({ user: receiverId });

    if (!senderProfile || !receiverProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (
      senderProfile.friends.includes(receiverProfile._id) ||
      senderProfile.friendRequestsSent.includes(receiverProfile._id)
    ) {
      return res.status(400).json({
        message: "Friend request already sent or user is already a friend",
      });
    }

    senderProfile.friendRequestsSent.push(receiverProfile._id);
    receiverProfile.friendRequestsReceived.push(senderProfile._id);

    await senderProfile.save();
    await receiverProfile.save();

    return res.status(200).json({ message: "Friend request sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending friend request", error });
  }
};


const cancelFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const senderProfile = await Profile.findOne({ user: senderId });
    const receiverProfile = await Profile.findOne({ user: receiverId });

    if (!senderProfile || !receiverProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!senderProfile.friendRequestsSent.includes(receiverProfile._id)) {
      return res.status(400).json({ message: "No friend request sent to this user" });
    }

    senderProfile.friendRequestsSent.pull(receiverProfile._id);
    receiverProfile.friendRequestsReceived.pull(senderProfile._id);

    await senderProfile.save();
    await receiverProfile.save();

    return res.status(200).json({ message: "Friend request cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error cancelling friend request", error });
  }
};


const acceptFriendRequest = async (req, res) => {
  try {
    const { userId, requestId } = req.body;

    const userProfile = await Profile.findOne({ user: userId });
    const requestSenderProfile = await Profile.findOne({ user: requestId });

    if (!userProfile || !requestSenderProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!userProfile.friendRequestsReceived.includes(requestSenderProfile._id)) {
      return res.status(400).json({ message: "No friend request from this user" });
    }

    // Add each other to friends list
    userProfile.friends.push(requestSenderProfile._id);
    requestSenderProfile.friends.push(userProfile._id);

    // Remove the friend request data points
    userProfile.friendRequestsReceived.pull(requestSenderProfile._id);
    requestSenderProfile.friendRequestsSent.pull(userProfile._id);

    await userProfile.save();
    await requestSenderProfile.save();

    return res.status(200).json({ message: "Friend request accepted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error accepting friend request", error });
  }
};



const rejectFriendRequest = async (req, res) => {
  try {
    const { userId, requestId } = req.body;

    const userProfile = await Profile.findOne({ user: userId });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!userProfile.friendRequestsReceived.includes(requestId)) {
      return res.status(400).json({ message: "No friend request from this user" });
    }

    userProfile.friendRequestsReceived.pull(requestId);

    await userProfile.save();

    return res.status(200).json({ message: "Friend request rejected successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error rejecting friend request", error });
  }
};


const followUser = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    const followerProfile = await Profile.findOne({ user: followerId });
    const followingProfile = await Profile.findOne({ user: followingId });

    if (!followerProfile || !followingProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (
      followerProfile.following.includes(followingProfile._id) ||
      followingProfile.followers.includes(followerProfile._id)
    ) {
      return res.status(400).json({
        message: "Already following this user",
      });
    }

    followerProfile.following.push(followingProfile._id);
    followingProfile.followers.push(followerProfile._id);

    await followerProfile.save();
    await followingProfile.save();

    return res.status(200).json({ message: "User followed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error following user", error });
  }
};

const unfollowUser = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    const followerProfile = await Profile.findOne({ user: followerId });
    const followingProfile = await Profile.findOne({ user: followingId });

    if (!followerProfile || !followingProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!followerProfile.following.includes(followingProfile._id)) {
      return res.status(400).json({ message: "You are not following this user" });
    }

    followerProfile.following.pull(followingProfile._id);
    followingProfile.followers.pull(followerProfile._id);

    await followerProfile.save();
    await followingProfile.save();

    return res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error unfollowing user", error });
  }
};



module.exports = {
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  followUser,
  unfollowUser
};
