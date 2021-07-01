const express = require ("express");
const router = express.Router();
const path = require ("path")
const tiendaController = require ("../controllers/tiendaController");
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve (__dirname, "../../public/uploads/products") )
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage })
  

router.get("/", tiendaController.tienda);

router.get("/alta", tiendaController.alta);

router.post ("/guardar", [upload.single ("image"), tiendaController.guardar])

router.get("/edicion", tiendaController.edicion);

router.get("/:id", tiendaController.detalle);

module.exports = router;