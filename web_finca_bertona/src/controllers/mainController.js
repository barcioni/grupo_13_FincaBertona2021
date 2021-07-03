const path = require ("path")

const controlador = {
    index: (req,res)=> {
        res.render(path.resolve(__dirname,"../views", "index.ejs"))
    },
    nuestraFamilia: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "nuestraFamilia.ejs"))
    },
    vinos: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "products", "vinos.ejs"))
    },
    carrito: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "checkout", "carrito.ejs"))
    },
};
module.exports = controlador ;
