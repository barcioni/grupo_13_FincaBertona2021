const path = require ("path");
const user = require('../models/user');


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
    guardar: (req,res) => {
        console.log (req.params)
        let result = user.new(req.body,req.file)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")
    },
    
};




module.exports = controlador ;
