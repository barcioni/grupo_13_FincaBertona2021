const path = require ("path")

const controlador = {
    tienda: (req,res)=>{
        res.render(path.resolve(__dirname,"../views","products", "tienda.ejs"))
    },

};




module.exports = controlador ;
