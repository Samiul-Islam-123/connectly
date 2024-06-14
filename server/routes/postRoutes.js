const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const { upload } = require("../middlewares/multer.middleware");

router.post(
  "/",
  authController.authenticate,
  upload.fields([{ name: "asset", maxCount: 1 }]),
  postController.createPost
);
router.get("/", authController.authenticate, postController.getAllPosts);
router.get("/:id", authController.authenticate, postController.getPostById);
router.put(
  "/:id",
  authController.authenticate,
  upload.fields([{ name: "asset", maxCount: 1 }]),
  postController.updatePost
);
router.delete("/:id", authController.authenticate, postController.deletePost);

// Like and Unlike Post
router.post("/:id/like", authController.authenticate, postController.likePost);
router.post(
  "/:id/unlike",
  authController.authenticate,
  postController.unlikePost
);

// Add and Delete Comment
router.post(
  "/:id/comments",
  authController.authenticate,
  postController.addComment
);
router.delete(
  "/:postId/comments/:commentId",
  authController.authenticate,
  postController.deleteComment
);

module.exports = router;
