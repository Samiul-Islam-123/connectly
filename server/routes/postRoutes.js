const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const { upload } = require("../middlewares/multer.middleware");

router.post(
  "/",
  authController.authenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  postController.createPost
);
router.get("/", authController.authenticate, postController.getAllPosts);
router.get("/:id", authController.authenticate, postController.getPostById);
router.put(
  "/:id",
  authController.authenticate,
  upload.fields([{ name: "image", maxCount: 1 }]),
  postController.updatePost
);
router.delete("/:id", authController.authenticate, postController.deletePost);

module.exports = router;
