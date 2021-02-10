const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express();

router.post('/create', BlogController.createPost);
router.get('/', BlogController.getPosts);

module.exports = router;
