const express = require('express');
const UserController = require('../controllers/useController');

const router = express.Router();

router.post('/register', UserController.registerUser);

module.exports = router;
