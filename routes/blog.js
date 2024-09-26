const express = require('express');
const router = express.Router();

// controller ko import karo;
const dummy = require('../controller/dummy');
const {createComment} = require('../controller/commentController');
const { createPost, getAllpost } = require('../controller/postController');
const { likePost, unlikePost } = require('../controller/likeController');

// mapping creat karo;
// router.get('/dummy',dummy);
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllpost);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

// export 
module.exports = router;