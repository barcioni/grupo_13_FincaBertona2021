const path = require ("path")

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

};




module.exports = controlador ;
