const path = require ("path");
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require ("express-validator");


const controlador = {
    // Formulario de registro
    registro: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "registro.ejs"))
    },
    // Formulario de contacto
    contacto: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "contacto.ejs"))
    },
    //Formulario de login
    login: (req,res) => { 
        res.render(path.resolve(__dirname,"../views", "users", "login.ejs"))
    },
    
    // Proceso de registro
    guardar: (req,res) => {
        //return res.send ({data:req.body, file:req.file})
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('users/registro.ejs', {
                errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
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
    
    //Proceso de login
    loginProcess: (req,res) => { 
        let userToLogin = user.findByEmail(req.body.email);
        
        if(userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
    
                return res.redirect('/tienda');
            } 
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Contraseña incorrecta'
                    }
                }
            });
        }
    
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'El email ingresado no está registrado'
                }
            }
        });
    }
};



module.exports = controlador ;
