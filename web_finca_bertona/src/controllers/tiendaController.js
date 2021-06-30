const path = require ("path")
const product = require('../models/product');
const brand = require('../models/brand');

const controlador = {
    tienda: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "tienda.ejs"))
    },
    alta: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "alta.ejs"))
    },
    edicion: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "edicion.ejs"))
    },
<<<<<<< HEAD
    detalle: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "detalle.ejs"), {product:product.one(req.params.id)})},

};
 


=======
};
>>>>>>> 6abf3edd4fb1939465fb283cf0b0ca9c08dda7fb

module.exports = controlador ;
