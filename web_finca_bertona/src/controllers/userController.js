const path = require ("path");
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const db = require('../database/models');
const User = db.User


const controlador = {
    // Formulario de registro
    register: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "registro.ejs"))
    },
    // Formulario de contacto
    contact: (req,res)=>{
        res.render(path.resolve(__dirname,"../views", "users", "contacto.ejs"))
    },
    //Formulario de login
    login: (req,res) => { 
        res.render(path.resolve(__dirname,"../views", "users", "login.ejs"))
    },
    //Perfil
    /* perfil: (req,res) => { 
        res.render(path.resolve(__dirname,"../views", "users", "perfil.ejs"),{user:user.one(req.params.id)})
    }, */
    
    // Proceso de registro
    save: (req,res) => {
        //return res.send ({data:req.body, file:req.file})
        const resultValidation = validationResult(req);
        store: (req,res) => {
            let errores = validationResult(req);
            if (!errores.isEmpty()){
                return res.render ("registro", {mensajeDeError: errores.mapped()})
            }else{
                    res.render('users/login', {errors: errors.array()});
            }
        }
        if (resultValidation.errors.length > 0) {
            return res.render('users/registro.ejs', {
                errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
        //let userInDB = user.findByEmail (req.body.email)
        let userInDB = User.findOne ({ where : {email: req.body.email}})
        if (userInDB) {
            return res.render ( "users/registro.ejs", {
                errors: {
                    email: { msg: "Este email ya está registrado"}
                },
                oldData: req.body
            });
        }
        
        console.log (req.params)
        //let result = user.new(req.body,req.file)
        let result = User.create (
           {nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            admin: req.body.email == "rosariobertona96@gmail.com"|| req.body.email == "barcioni7@gmail.com" ? true: false,
            fechaDeNacimiento: req.body.fechaDeNacimiento,
            domicilio: req.body.domicilio,
            clave: bcrypt.hashSync(req.body.clave, 10),
            image: req.file!= undefined && file.filename != undefined ? file.filename : "guestUserDefault.png",}
            
            // CONSULTAR COMO HACER EL THEN
            )
            .then(()=> {
                return true)            
            .catch(error => res.send(error))

        return result == true ? res.redirect("/login"): res.send("Error al cargar la información")
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


module.exports = controlador ; 
