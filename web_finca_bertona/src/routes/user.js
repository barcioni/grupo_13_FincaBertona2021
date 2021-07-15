const express = require ("express");
const router = express.Router ();
const path = require ("path")
const userController = require ("../controllers/userController");
// Middlewares
const logDBMiddleware = require("../middlewares/logDBMiddleware");
//Express Validator
const {body} = require("express-validator");
const validaciones = [
  body("").notEmpty(),
  body("").notEmpty(),
  body("").notEmpty(),
];
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve (__dirname, "../../public/uploads/users") )
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })

router.get("/registro", userController.registro);

router.get("/contacto", userController.contacto);

router.get("/login", userController.login);

router.post("/guardarUsuario", [upload.single("image") /*logDBMiddleware*/]/*, validaciones*/, userController.guardar);

module.exports = router;