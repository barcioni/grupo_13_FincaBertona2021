const express = require ("express");
const router = express.Router();
const cartController = require ("../controllers/cartController");

router.get("/", cartController.index);

router.post("/add", cartController.create);

router.put("/update", cartController.update)

router.delete("/eliminar/:id", cartController.delete)


module.exports = router;