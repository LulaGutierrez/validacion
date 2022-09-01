// ************ Require's ************
const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

// ************ Controller Require ************
const userController = require('../controllers/userController');
const userValidations = require('../validations/userValidations');

router
    .get('/register', userController.register)
    .post('/register', userValidations, userController.processRegister)

module.exports = router;
