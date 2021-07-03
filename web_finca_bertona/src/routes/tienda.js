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
      cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage })
  

router.get("/", tiendaController.tienda);

router.get("/alta", tiendaController.alta);

router.get("/:id", tiendaController.detalle);

router.post ("/guardar", [upload.single ("image")], tiendaController.guardar)

router.get("/editar/:id", tiendaController.edicion);

router.put ("/actualizar/:id",[upload.single ("image")], tiendaController.actualizar);

router.get("/editarImagen/:id", tiendaController.edicionImagen);

router.put ("/actualizarImagen/:id",[upload.single ("image")], tiendaController.actualizarImagen)

router.delete("/eliminar/:id",tiendaController.eliminar)


module.exports = router;