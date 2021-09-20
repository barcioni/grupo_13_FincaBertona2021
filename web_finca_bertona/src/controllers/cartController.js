const sequelize = require('sequelize');
const db = require('../database/models');
const { checkout } = require('../routes/cart');
const { carrito } = require('./mainController');
const {Product, User, Brand, Cart} = db

module.exports = {
    index: async (req,res) => {
        try {
            
            const products = await Product.findAll({include: ["brands"]});
            const user = await User.findByPk (req.session.userLogged) //req.session.user_id
            const carts = await Cart.findAll ({ include: ["product", "user"]},{where: user_id = req.session.userLogged  }
            );

          
            return res.render ("checkout/carrito", {
                title: "Carrito",
                user: user,
                products: products,
                carts: carts
            })
        } catch (error) {
            res.send (error)            
        }

    },
    create: async (req, res) => {
        const product = await Product.findByPk(req.body.product)
        try {
            const cart = await Cart.create ({
                user_id: req.body.user,
                product_id: product.id,
                quantity: req.body.quantity,
                current_price: product.price,
                release_date: Date.now ()
            })
            return res.redirect ("/carrito")
        } catch (error) {
            res.send (error) 
        }
    },
    update: async (req, res) => {
        res.send ({data: req.body, id: req.params.id})
    }

};


