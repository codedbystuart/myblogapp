const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express();

router.post('/create', BlogController.createPost);
router.get('/', BlogController.getPosts);
router.get('/:id', BlogController.getSinglePost);

module.exports = router;
