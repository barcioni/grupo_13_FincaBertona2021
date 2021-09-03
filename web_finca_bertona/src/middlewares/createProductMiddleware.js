const { check } = require("express-validator");

let createProductMiddleware = [  
check("brand").notEmpty().withMessage("Debes completar el campo marca").bail(),
check("year").notEmpty().withMessage("Debes completar el campo año").bail(),
check("varietal").notEmpty().withMessage("Debes completar el campo varietal").bail(),
check("description").notEmpty().withMessage("Debes completar la descripción"),
check("price").notEmpty().withMessage("Debes completar el campo precio").bail(),
]
;

module.exports = createProductMiddleware