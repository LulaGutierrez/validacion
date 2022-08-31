const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const controller = {
    register : (req, res) => {
        return res.render('register')
        const errors = validationResult(req);
        if (errors.isEmpty()) {
        // No hay errores, seguimos adelante.
        } else {
        // Si hay errores, volvemos al formulario con los mensajes.
        }
    }
}

register: (req, res) => {
    
    },

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes poner un nombre')
        .isLength({ min: 4 }).withMessage('Tiene que tener un mínimo de 4 caracteres'),
    check('last-name')
        .notEmpty().withMessage('Debes poner un apellido')
        .isLength({ min: 3 }).withMessage('Tiene que tener un mínimo de 3 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes poner tu email')
        .bail().isEmail.isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 8 }).withMessage('La contraseña tiene que tener al menos 8 caracteres'),
];

module.exports = [
    controller,
    validateRegister,
]
