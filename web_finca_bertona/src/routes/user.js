const express = require ("express");
const router = express.Router ();
const userController = require ("../controllers/userController");

router.get("/registro", userController.registro)

router.get("/contacto",userController.contacto)

router.get("/login",userController.login)

module.exports = router;