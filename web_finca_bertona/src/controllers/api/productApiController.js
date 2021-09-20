const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Product = db.Product
const Brand = db.Brand
const { Op } = require("sequelize");
const moment = require('moment');

module.exports ={ 
    list: (req,res) => {
        db.Product.findAll({
            include: ['brands']
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    detail: (req,res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['brands']
            })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/detail/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    }
    
    
};