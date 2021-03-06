const { Association } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../database/models');
const { checkout } = require('../routes/cart');
const { carrito } = require('./mainController');
const {Product, User, Brand, Cart} = db

module.exports = {
    index: async (req,res) => {
        try {            
            //let products = await Product.findAll();
            let brands = await Brand.findAll()
            let user = req.session.userLogged //req.session.u
            let carts = await Cart.findAll ({ include: ["product", "user"]},{where: {user_id: user.id} } //req.session.userLogged.id
            );
            let total = carts.map(item => 
                parseInt(item.product.price)*parseInt(item.quantity))
            const autoSuma = (previousValue, currentValue) => previousValue + currentValue;
            total = total.reduce (autoSuma, 0)

            //console.log(req.session.userLogged);
            //return res.json(user.id)


            return res.render ("checkout/carrito", {
                title: "Carrito",
                user: user,
                //products: products,
                totalG: total,
                brands: brands,
                carts: carts,
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
        //return res.send(req.body)
        try {
            const cart = await Cart.update (
                {quantity: req.body.quantity}, 
                {where: {id : req.body.cart_id} })
            return res.redirect ("/carrito")
        } catch (error) {
            res.send (error) 
        }
    },
    delete: function (req,res) {
        Cart.destroy(
            {where: {id: req.params.id}, force: true}) 
            .then(()=>{
                return res.redirect('/carrito')})
                .catch(error => res.send(error)) 
            },
    /*async (req,res) => {
        try {
            const deleteItem = await Cart.destoy (
                {where: {id: req.params.id}, force: true})
            return res.redirect ("/carrito")

        } catch (error) {
            
        }
    }*/

    
};


