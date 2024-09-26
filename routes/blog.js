const express = require('express');
const router = express.Router();

// controller ko import karo;
const dummy = require('../controller/dummy');
const {createComment} = require('../controller/commentController');

// mapping creat karo;
router.get('/dummy',dummy);
router.post('/comments/create',createComment);

// export 
module.exports = router;