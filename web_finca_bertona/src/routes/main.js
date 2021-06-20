const express = require ("express");
const router = express.Router();
const mainController = require ("../controllers/mainController");

router.get("/", mainController.index)
router.get("/nuestraFamilia", mainController.nuestraFamilia)
router.get("/vinos", mainController.vinos)

module.exports = router;
