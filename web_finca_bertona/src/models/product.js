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
    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            brand: parseInt(data.brand),
            description: data.description,
            year: data.year,
            image: file.filename,
            price: data.price
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;    
    },
    edit: function (data,file,id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id ){
                producto.brand = parseInt(data.brand),
                producto.description = data.description,
                producto.year = data.year,
                producto.image = file.filename,
                producto.price = data.price
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },

 }



module.exports = model;