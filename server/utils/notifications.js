const Notification = require("../models/notificationModel");

const createNotification = async (user, type, source, link, message) => {
  const notification = new Notification({
    user,
    type,
    source,
    link,
    message,
  });
  await notification.save();
};

const createLikeNotification = async (post, link, userProfile) => {
  const message = `${userProfile.username} liked your post`;
  await createNotification(post.user, "like", userProfile.user, link, message);
};

const createCommentNotification = async (post, comment, link, userProfile) => {
  const message = `${userProfile.username} commented on your post: ${comment.text}`;
  await createNotification(
    post.user,
    "comment",
    userProfile.user,
    link,
    message
  );
};

module.exports = { createLikeNotification, createCommentNotification };
