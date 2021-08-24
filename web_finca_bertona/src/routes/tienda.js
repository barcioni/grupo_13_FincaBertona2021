const express = require ("express");
const router = express.Router();
const path = require ("path");
const tiendaController = require ("../controllers/tiendaController");
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve (__dirname, "../../public/uploads/products") )
    },
    filename: function (req, file, cb) {
      cb(null, "producto" + '-' + Date.now() + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })
  
router.get("/", tiendaController.list); //Funcionando con la nueva DB

router.get("/alta", tiendaController.add); //Funcionando con la nueva DB

router.get("/:id", tiendaController.detail); //Funcionando con la nueva DB

router.post ("/guardar", [upload.single ("image")], tiendaController.save); //Funcionando con la nueva DB

router.get("/editar/:id", tiendaController.edit); //Funcionando con la nueva DB

router.put ("/actualizar/:id",[upload.single ("image")], tiendaController.update); //Funcionando con la nueva DB

router.get("/editarImagen/:id", tiendaController.editImage); //Funcionando con la nueva DB

router.put ("/actualizarImagen/:id",[upload.single ("image")], tiendaController.updateImage)

router.delete("/eliminar/:id",tiendaController.delete) //Funcionando con la nueva DB


module.exports = router;