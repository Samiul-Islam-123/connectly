const Notification = require("../models/notificationModel");

const fetchAllNotifications = async (req, res) => {
  try {
    const { type } = req.query;
    if (type) {
      const notifications = await Notification.find({ user: req.user.id, type })
        .sort({ createdAt: -1 })
        .limit(20);
      return res.status(200).json(notifications);
    }
    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(20);
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching notifications", error });
  }
};

const readNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    notification.isRead = true;
    await notification.save();
    res.status(200).json(notification);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error reading notification", error });
  }
};

module.exports = { fetchAllNotifications, readNotification };
