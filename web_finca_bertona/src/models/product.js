const path = require('path');
const fs = require('fs');
const brandModel = require ("./brand.js")


const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","products.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.brand = brandModel.one(element.brand)
            return element
        })
        return productos;
    },
    one: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    },

 }



module.exports = model;