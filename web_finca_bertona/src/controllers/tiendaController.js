const path = require ("path")
//const product = require('../models/product');
const user = require ("../models/user");
const brand = require('../models/brand');

const { validationResult } = require("express-validator");

const db = require('../database/models');
const Product = db.Product
const Brand = db.Brand
const User = db.User

const controlador = {
    list: (req, res) => {
        Product.findAll({
            include: ['brands']
        })
            .then(products => {
                //console.log (products)
                res.render('products/tienda.ejs', {products, user: req.session.userLogged})
            })
            .catch(error => res.send(error))
    },
    add: (req, res) => {
        Brand.findAll( )
        .then(brands => {
            res.render('products/alta.ejs', {brands})
            })
            .catch(error => res.send(error))
    },
    save : function (req,res) {
        let errors = validationResult(req)
        if (errors.isEmpty()){
        Product.create(
            {
            brand_id: req.body.brand,
            year: req.body.year,
            varietal: req.body.varietal,
            graduacion: req.body.graduacion,
            barrica: req.body.barrica,
            guarda: req.body.guarda,
            description: req.body.description,
            image: req.file!= undefined && req.file.filename != undefined ? req.file.filename : "botella-ruta15.png",
            price: req.body.price,
            currency: "$",
            stock: req.body.stock
            }
            )
            .then(()=> {
            
            return res.redirect('/tienda')})            
            .catch(error => res.send(error))
        } else {
            //return res.send (errors)
            res.locals.errors = errors.mapped()
            Brand.findAll( )
            .then(brands => {
                res.render("products/alta", { errors: errors.mapped(), old: req.body, brands})
            })
            .catch(error => res.send(error))
        }
        },
        edit: (req,res) => {
            let pedidoProduct =  Product.findByPk(req.params.id,
                {
                    include : [{association:'brands'}]
            });
            let pedidoBrand = Brand.findAll();
            Promise
            .all([pedidoProduct, pedidoBrand])
            .then(([product, brands]) => {
                //return res.send(product)
                res.render("products/edicion.ejs", {product, brands})})
                .catch(error => res.send(error))
            },
        editImage: (req,res) => {
                let pedidoProduct =  Product.findByPk(req.params.id,
                    {
                        include : [{association:'brands'}]
                });
                let pedidoBrand = Brand.findAll();
                Promise
                .all([pedidoProduct, pedidoBrand])
                .then(([product, brands]) => {
                    //return res.send(product)
                    res.render("products/edicionImagen.ejs", {product, brands})})
                    .catch(error => res.send(error))
                },
            update: function (req,res) {
                Product
                .update(
                    {
                    brand_id: req.body.brand,
                    year: req.body.year,
                    varietal: req.body.varietal,
                    graduacion: req.body.graduacion,
                    barrica: req.body.barrica,
                    guarda: req.body.guarda,
                    description: req.body.description,
                    image: req.file!= undefined && file.filename != undefined ? file.filename : "botella-ruta15.png",
                    price: req.body.price,
                    currency: "$",
                    stock: req.body.stock
                    },
                    {
                        where: {id: req.params.id}
                    }
                    )
                    .then(()=> {
                    return res.redirect('/tienda')})            
                    .catch(error => res.send(error))
                },
                updateImage:(req,res)=>{
                    Product.update(
                        {
                        image: req.file.image!= undefined && file.filename != undefined ? file.filename : "botella-ruta15.png",
                        },
                        {
                            where: {id: req.params.id}
                        }
                        )
                        .then(()=> {
                            //return res.send (req.body.image)
                        return res.redirect('/tienda')
                    })            
                        .catch(error => res.send(error))
                    },
                /*actualizarImagen: (req,res) => {
                    let result = product.editImage(req.body,req.file,req.params.id)
                    return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
                },*/
    
    detail: (req, res) => {
        Product.findByPk(req.params.id,
            {
                include : [{association:'brands'}]
            })
            .then(product => {
                //console.log(product);
                res.render('products/detalle.ejs', {product,  user: req.session.userLogged});
            })
            .catch(error => res.send(error))
        },
        /*detalle: (req,res)=>{
            res.render(path.resolve(__dirname,"../views","products", "detalle.ejs"), {product:product.one(req.params.id), user: req.session.userLogged})
        },*/
        
        delete: function (req,res) {
            Product.destroy(
                {where: {id: req.params.id}, force: true}) 
                .then(()=>{
                    return res.redirect('/tienda')})
                    .catch(error => res.send(error)) 
                },
                /*eliminar: (req,res) => {
                    let result = product.delete(req.params.id);
                    return result == true ? res.redirect("/tienda") : res.send("Error al cargar la informacion")
                }*/
                
            };
            
            
            module.exports = controlador ;
            
            /*tienda: (req,res)=>{
                res.render(path.resolve(__dirname,"../views","products", "tienda.ejs"), {list:product.allWithExtra(), user: req.session.userLogged})
            },*/
            /*alta: (req,res)=>{
                res.render(path.resolve(__dirname,"../views","products", "alta.ejs"), {brands:brand.all()})
            },*/
            /*guardar: (req,res) => {
                //return res.send ({data:req.body, file:req.file})
                console.log (req.params)
                let result = product.new(req.body,req.file)
                return result == true ? res.redirect("/tienda") : res.send("Error al cargar la información")
            },*/
            /*edicion: (req,res)=>{
                res.render(path.resolve(__dirname,"../views","products", "edicion.ejs"),{product:product.one(req.params.id),brands:brand.all(),})
            },*/
            /*actualizar: (req,res) => {
                let result = product.edit(req.body,req.file,req.params.id)
                return result == true ? res.redirect("/tienda") : res.send("Error al cargar la información")
            },*/