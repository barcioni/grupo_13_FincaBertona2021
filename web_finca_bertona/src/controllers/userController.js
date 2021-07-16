const path = require ("path");
const user = require('../models/user');
const { validationResult } = require ("express-validator");


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
        //return res.send ({data:req.body, file:req.file})
        const resultValidation = validationResult(req);
        /*if (resultValidation.errors.length > 0) {
			return res.render('users/registro.ejs', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}*/
       
        let userInDB = user.findByEmail (req.body.email)
        if (userInDB) {
            return res.render ( "users/registro.ejs", {
                errors: {
                    email: { msg: "Este email ya está registrado"}
                },
                oldData: req.body
            });
        }

        console.log (req.params)
        let result = user.new(req.body,req.file)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")
    },
    
};



module.exports = controlador ;
