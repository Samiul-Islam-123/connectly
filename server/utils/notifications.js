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
  const message = `${userProfile.user.name} liked your post`;
  await createNotification(post.user, "like", userProfile.user, link, message);
};

const createCommentNotification = async (post, comment, link, userProfile) => {
  const message = `${userProfile.user.name} commented on your post: ${comment.text}`;
  await createNotification(
    post.user,
    "comment",
    userProfile.user,
    link,
    message
  );
};

const deleteLikeNotification = async (post, user) => {
  await Notification.findOneAndDelete({
    user: post.user,
    type: "like",
    source: user.user._id,
  });
};

const deleteCommentNotification = async (post, comment) => {
  await Notification.findOneAndDelete({
    user: post.user,
    type: "comment",
    message: new RegExp(comment.text, "i"),
  });
};

module.exports = {
  createLikeNotification,
  createCommentNotification,
  deleteLikeNotification,
  deleteCommentNotification,
};
