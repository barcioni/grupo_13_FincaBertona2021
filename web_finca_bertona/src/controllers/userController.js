const path = require ("path");
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
let errors = validationResult(req);

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
    //Perfil
    /*perfil: (req,res) => { 
        res.render(path.resolve(__dirname,"../views", "users", "perfil.ejs"),{user:user.one(req.params.id)})
    },*/
    
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
        return result == true ? res.redirect("/login") : res.send("Error al cargar la información")
    },
    
    //Proceso de login
    loginProcess: (req,res) => { 
        let userToLogin = user.findByEmail(req.body.email);
        //return res.send ({ data: req.body, user: userToLogin, clave: bcrypt.compareSync(req.body.clave, userToLogin.clave)})
        if(userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.clave, userToLogin.clave);
            if (isOkThePassword) {
                delete userToLogin.clave;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
    
                return res.redirect('/perfil');
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
    },
    perfil: (req, res) => {
		return res.render('users/perfil', {
			user: req.session.userLogged
		});
	},
    logout: (req, res) => {
        res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}

};
store: (req,res) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.render ("registro", {mensadeDeError: errores.mapped()})
    }else{
            res.render(path.resolve(__dirname,"../views", "users", "registro.ejs"))
    }
}


module.exports = controlador ;
