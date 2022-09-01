const { check } = require("express-validator");

const validateRegister = [
    check('name')
        .notEmpty().withMessage('*El nombre es obligatorio').bail()
        .isLength({ min: 4 }).withMessage('*Tiene que tener un mínimo de 4 caracteres'),
    check('lastName')
        .notEmpty().withMessage('*El apellido es obligatorio').bail()
        .isLength({ min: 3 }).withMessage('*Tiene que tener un mínimo de 3 caracteres'),
    check('email')
        .notEmpty().withMessage('*El mail es obligatorio').bail()
        .isEmail().withMessage('*Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('*La contraseña es obligatoria').bail()
        .isLength({ min: 8 }).withMessage('*La contraseña tiene que tener al menos 8 caracteres'),
];

module.exports = validateRegister;