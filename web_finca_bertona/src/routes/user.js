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
    body("nombre").notEmpty(),
    body("apellido").notEmpty(),
    body("nombre-de-usuario").notEmpty(),
    body("clave").notEmpty(),
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
router.post('/loginProcess', userController.loginProcess)

module.exports = router;