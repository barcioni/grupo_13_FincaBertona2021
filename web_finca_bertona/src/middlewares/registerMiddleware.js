const { check } = require("express-validator");

let registerMiddleware = [  
check("nombre").notEmpty().withMessage("Debes completar el campo del nombre").bail(),
check("apellido").notEmpty().withMessage("Debes completar el campo del apellido").bail(),
check("clave").notEmpty().withMessage("Debes completar el campo de la contraseña").bail(),
check("email").notEmpty().withMessage("Debes completar con un email válido"),
check("domicilio").notEmpty().withMessage("Debes completar el campo con tu domicilio").bail(),
]
;

module.exports = registerMiddleware


//const userModel = require("../models/user");
/*module.exports = [
  body("email").isEmail().custom(value => {
    let registered = userModel.findByEmail(value);
    if (registered) {
      return Promise.reject('E-mail already exists');
    }
    return true
  }),
  body("password").isLength({ min: 5 })
]*/