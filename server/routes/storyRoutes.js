const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");
const authController = require("../controllers/authController");
const { upload } = require("../middlewares/multer.middleware");

// Routes for story
router.post(
  "/",
  authController.authenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  storyController.createStory
);
router.get("/", authController.authenticate, storyController.getAllStories);
router.get("/:id", authController.authenticate, storyController.getStoryById);
router.put(
  "/:id",
  authController.authenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  storyController.updateStory
);
router.delete("/:id", authController.authenticate, storyController.deleteStory);

module.exports = router;
