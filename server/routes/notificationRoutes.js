const { Router } = require("express");
const {
  fetchAllNotifications,
} = require("../controllers/notificationController");

const router = Router();

router.get("/", (req, res) => {
  res.send("Notification route");
});

router.get("/all", fetchAllNotifications);
router.post("/read/:id", readNotification);

module.exports = router;
