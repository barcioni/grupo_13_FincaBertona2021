const express = require ("express");
const router = express.Router ();
const userController = require ("../controllers/userController");

router.get("/registro", userController.registro);

router.get("/contacto",userController.contacto);

router.get("/login",userController.login);

router.post("/guardarUsuario", userController.guardar);

module.exports = router;