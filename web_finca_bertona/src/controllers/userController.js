const path = require ("path")


const controlador = {
    registro: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "registro.ejs"))
    },
    contacto: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "contacto.ejs"))
    },
    login: (req,res) => { 
        res.render(path.resolve(__dirname,"../views", "users", "login.ejs"))
    },
    
};




module.exports = controlador ;
