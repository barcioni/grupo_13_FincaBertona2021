const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Product = db.Product
const Brand = db.Brand
const { Op } = require("sequelize");
const moment = require('moment');

module.exports ={ 
    list: (req,res) => {
        db.Brand.findAll({
            include: ['products']
        })
        .then(brands => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: brands.length,
                    url: 'api/brands'
                },
                data: brands
            }
                res.json(respuesta);
            })
    },
    /*detail: (req,res) => {
        db.Brand.findByPk(req.params.id,
            {
                include : ['brands']
            })
            .then(brand => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: brand.length,
                        url: '/api/brands/detail/:id'
                    },
                    data: brand
                }
                res.json(respuesta);
            });
    }
    */
    
};