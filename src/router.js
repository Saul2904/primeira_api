const express = require('express');
const usersController = require('./controllers/userController');
const loginController = require('./controllers/loginController');

const router = express.Router();

router.get('/users', usersController.getAll);

//authentication
router.post('/login', loginController.login);

module.exports = router;