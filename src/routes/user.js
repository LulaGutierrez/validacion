// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');

router
    .get('/register', userController.register)
    .post('/register', validateRegister, controller.processRegister)

module.exports = router;