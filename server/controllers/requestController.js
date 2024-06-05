const Profile = require("../models/profileModel");

// Send a friend request
const sendFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const senderProfile = await Profile.findOne({ user: senderId });
    const receiverProfile = await Profile.findOne({ user: receiverId });

    if (!senderProfile || !receiverProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (
      senderProfile.friends.includes(receiverId) ||
      senderProfile.friendRequestsSent.includes(receiverId)
    ) {
      return res.status(400).json({
        message: "Friend request already sent or user is already a friend",
      });
    }

    senderProfile.friendRequestsSent.push(receiverId);
    receiverProfile.friendRequestsReceived.push(senderId);

    await senderProfile.save();
    await receiverProfile.save();

    return res
      .status(200)
      .json({ message: "Friend request sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error sending friend request", error });
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

    if (!senderProfile.friendRequestsSent.includes(receiverId)) {
      return res
        .status(400)
        .json({ message: "No friend request sent to this user" });
    }
    senderProfile.friendRequestsSent.pull(receiverId);
    receiverProfile.friendRequestsReceived.pull(senderId);

    await senderProfile.save();
    await receiverProfile.save();

    return res
      .status(200)
      .json({ message: "Friend request deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error cancelling friend request", error });
  }
};

// Accept a friend request
const acceptFriendRequest = async (req, res) => {
  try {
    const { userId, requestId } = req.body;

    const user = await Profile.findOne({ user: userId });
    const requestSender = await Profile.findOne({ user: requestId });

    if (!user || !requestSender) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!user.friendRequestsReceived.includes(requestId)) {
      return res
        .status(400)
        .json({ message: "No friend request from this user" });
    }

    user.friends.push(requestId);
    requestSender.friends.push(userId);

    user.friendRequestsReceived = user.friendRequestsReceived.filter(
      (id) => id.toString() !== requestId.toString()
    );
    requestSender.friendRequestsSent = requestSender.friendRequestsSent.filter(
      (id) => id.toString() !== userId.toString()
    );

    await user.save();
    await requestSender.save();

    return res
      .status(200)
      .json({ message: "Friend request accepted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error accepting friend request", error });
  }
};

// Reject a friend request
const rejectFriendRequest = async (req, res) => {
  try {
    const { userId, requestId } = req.body;

    const user = await Profile.findOne({ user: userId });

    if (!user) {
      return res.status(404).json({ message: "User profile not found" });
    }

    if (!user.friendRequestsReceived.includes(requestId)) {
      return res
        .status(400)
        .json({ message: "No friend request from this user" });
    }

    user.friendRequestsReceived = user.friendRequestsReceived.filter(
      (id) => id.toString() !== requestId.toString()
    );

    await user.save();

    return res
      .status(200)
      .json({ message: "Friend request rejected successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error rejecting friend request", error });
  }
};

module.exports = {
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
};
