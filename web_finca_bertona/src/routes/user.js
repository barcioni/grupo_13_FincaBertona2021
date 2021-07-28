const express = require ("express");
const router = express.Router ();
const path = require ("path")
const userController = require ("../controllers/userController");
// Middlewares
const logDBMiddleware = require("../middlewares/logDBMiddleware");
const guestMiddleware = require('../middlewares/guestMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
//Express Validator
const {body} = require("express-validator");
const validaciones = [
    body("nombre").notEmpty().withMessage("Debes completar el campo del nombre"),
    body("apellido").notEmpty().withMessage("Debes completar el campo del apellido"),
    body("nombre-de-usuario").notEmpty().withMessage("Debes completar el campo del nombre de usuario"),
    body("clave").notEmpty().withMessage("Debes completar el campo de la contraseña"),
    body("email").isEmail().withMessage("Debes completar con un email válido"),

    body("nombre-completo").notEmpty().withMessage("Debes completar el campo con tu nombre completo"),
    body("pais").notEmpty().withMessage("Debes completar el campo con tu pais de residencia"),
    body("provincia").notEmpty().withMessage("Debes completar el campo de Provincia"),
    body("localidad").notEmpty().withMessage("Debes completar el campo con tu localidad"),
    body("telefono").notEmpty().withMessage("Debes completar el campo con un teléfono"),
    body("mensaje").notEmpty().withMessage("Escribe un mensaje"),
  ];
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve (__dirname, "../../public/uploads/users") )
    },
    filename: function (req, file, cb) {
      cb(null, "user" + '-' + Date.now() + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })

//Formulario de registro
router.get("/registro",[guestMiddleware], userController.registro);
//Formulario de contacto
router.get("/contacto", userController.contacto);
//Formulario de login
router.get("/login",[guestMiddleware], userController.login);
//Perfil
router.get("/perfil", [loggedMiddleware], userController.perfil);
//Logout
router.get("/logout", userController.logout);
//Proceso de registro
router.post("/guardarUsuario",[upload.single("image"), validaciones, logDBMiddleware], userController.guardar);
//Proceso de login
router.post('/loginProcess', validaciones, userController.loginProcess)

module.exports = router;