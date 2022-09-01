const { validationResult } = require('express-validator');

const userController = {
    register : (req, res) => {
        return res.render('register')
	},
    processRegister : (req, res) =>{
        let errors = validationResult(req)

        if(errors.isEmpty()){
            return res.redirect('/')
        } else {
            return res.render('register', { errors:
                 errors.mapped(), old: req.body});
        }
    }
}

module.exports = userController;