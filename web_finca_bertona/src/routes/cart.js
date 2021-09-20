const express = require ("express");
const router = express.Router();
const cartController = require ("../controllers/cartController");

router.get("/", cartController.index);

router.post("/add", cartController.create);

router.post("/update/:id", cartController.update)


module.exports = router;