const path = require ("path")
const product = require('../models/product');
const user = require ("../models/user");
const brand = require('../models/brand');

const controlador = {
    tienda: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "tienda.ejs"), {list:product.allWithExtra()})
    },
    alta: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "alta.ejs"), {brands:brand.all()})
    },
    guardar: (req,res) => {
        //return res.send ({data:req.body, file:req.file})
        console.log (req.params)
        let result = product.new(req.body,req.file)
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    },
    edicion: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "edicion.ejs"),{product:product.one(req.params.id),brands:brand.all(),})
    },
    edicionImagen: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "edicionImagen.ejs"),{product:product.one(req.params.id),brands:brand.all(),})
    },
    actualizar: (req,res) => {
        let result = product.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    },
    actualizarImagen: (req,res) => {
        let result = product.editImage(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    },
    detalle: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "detalle.ejs"), {product:product.one(req.params.id), user: req.session.userLogged})
    },
    eliminar: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
    } 

};
 


module.exports = controlador ;
