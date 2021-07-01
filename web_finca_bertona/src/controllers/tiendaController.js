const path = require ("path")
const product = require('../models/product');
const brand = require('../models/brand');

const controlador = {
    tienda: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "tienda.ejs"))
    },
    alta: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "alta.ejs"), {brands:brand.all()})
    },
    guardar: (req,res) => {
        let result = product.new(req.body,req.file)
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    },
    edicion: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "edicion.ejs"),{product:product.one(req.params.id),brands:brand.all(),})
    },
    actualizar: (req,res) => {
        let result = product.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    },
    detalle: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "detalle.ejs"), {product:product.one(req.params.id)})
    },

};
 


module.exports = controlador ;
