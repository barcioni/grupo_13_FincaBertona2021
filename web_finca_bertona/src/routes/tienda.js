const express = require ("express");
const router = express.Router();
const tiendaController = require ("../controllers/tiendaController");

router.get("/", tiendaController.tienda)
/*router.get("/alta", tiendaController.alta)
router.get("/edicion", tiendaController.edicion)*/
module.exports = router;