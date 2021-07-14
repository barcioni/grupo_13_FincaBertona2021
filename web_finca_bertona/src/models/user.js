const path = require('path');
const fs = require('fs');

const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","users.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","users.json")
        let usuarios = this.all();
        let nuevo = {
            id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,
            nombre: data.nombre,
            apellido: data.apellido,
            usuario: data.usuario,
            fechaDeNacimiento: data.fechaDeNacimiento,
            domicilio: data.domicilio,
            clave: data.clave,
            image: file.filename
        }    
        usuarios.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(usuarios,null,2));
        return true;    
    },
}

module.exports = model;