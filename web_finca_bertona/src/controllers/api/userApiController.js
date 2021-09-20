const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const User = db.User
const { Op } = require("sequelize");
const moment = require('moment');


module.exports ={ 
    list: (req,res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    detail: (req,res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/detail/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
    
    
};