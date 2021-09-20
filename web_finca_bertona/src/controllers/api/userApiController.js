const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const User = db.User
const { Op } = require("sequelize");
const moment = require('moment');


module.exports ={ 
    list: (req,res) => {
        res.send (req.body)
    },
    detail: (req,res) => {
        res.send (req.body)
    }
    
    
};