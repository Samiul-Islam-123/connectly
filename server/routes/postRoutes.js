const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const authController = require('../controllers/authController');

//routes for post
router.post('/',authController.authenticate,  postController.createPost);
router.get('/', authController.authenticate, postController.getAllPosts);
router.get('/:id', authController.authenticate,  postController.getPostById);
router.put('/:id', authController.authenticate, postController.updatePost);
router.delete('/:id', authController.authenticate, postController.deletePost);

module.exports = router;
