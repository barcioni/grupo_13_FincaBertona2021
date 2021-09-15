const path = require("path");
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const db = require('../database/models');
const User = db.User


const controlador = {
    // Formulario de registro
    register: (req, res) => {
        res.render(path.resolve(__dirname, "../views", "users", "registro.ejs"))
    },
    // Formulario de contacto
    contact: (req, res) => {
        res.render(path.resolve(__dirname, "../views", "users", "contacto.ejs"))
    },
    //Formulario de login
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../views", "users", "login.ejs"))
    },

    // Proceso de registro
    save: async (req, res) => {
        let errors = validationResult(req)
        //return res.send(req.body)
    
        if (errors.isEmpty()) {
            //console.log("Está vacío");
            try {
                await User.create(
                    {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        admin: req.body.email == "rosariobertona96@gmail.com" || req.body.email == "barcioni7@gmail.com" ? true : false,
                        fechaDeNacimiento: req.body.fechaDeNacimiento,
                        domicilio: req.body.domicilio,
                        clave: bcrypt.hashSync(req.body.clave, 10),
                        image: req.file.image != undefined && file.filename != undefined ? file.filename : "guestUserDefault.png",
                    }
                    )
                    console.log (req.body)
                    return res.redirect("/login")
                } catch (error) { res.send(error) }
        } else {
            //return res.send (errors)
            
            res.locals.errors = errors.mapped()
            res.render("users/registro", { errors: errors.mapped(), old: req.body });
        }
    },

    //Proceso de login
    loginProcess: async (req, res) => {
        let userToLogin = await User.findOne({ where: { email: req.body.email } });
        //return res.send ({ data: req.body, user: userToLogin, clave: bcrypt.compareSync(req.body.clave, userToLogin.clave)})
        if (userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.clave, userToLogin.clave);
            if (isOkThePassword) {
                delete userToLogin.clave;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 6000) * 60000 })
                }

                return res.redirect('/perfil');
            }
            return res.render('users/login', {
                errors: {
                    clave: {
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


module.exports = controlador;

//Perfil
/* perfil: (req,res) => {
    res.render(path.resolve(__dirname,"../views", "users", "perfil.ejs"),{user:user.one(req.params.id)})
}, */

/*store: (req,res) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.render ("registro", {mensajeDeError: errores.mapped()})
    }else{
            res.render('users/login', {errors: errors.array()});
        }
    }*/
/*if (resultValidation.errors.length > 0) {
return res.render('users/registro.ejs', {
    errors: resultValidation.mapped(),
    oldData: req.body
});
} */
        //let userInDB = user.findByEmail (req.body.email)
/*try { let userInDB = await User.findOne  ({ where : {email: req.body.email}})
if (userInDB) {
    return res.render ( "users/registro.ejs", {
            errors: {
                email: { msg: "Este email ya está registrado"}
            },
            oldData: req.body
        });
    }
} catch (error) { res.send(error)  }*/


        //console.log (req.params)
        //let result = user.new(req.body,req.file)

