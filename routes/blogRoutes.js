const express = require('express');
const BlogController = require('../controllers/blogController');

const router = express();

router.post('/create', BlogController);

module.exports = router;
