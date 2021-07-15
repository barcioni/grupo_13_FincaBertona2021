const path = require('path');
const fs = require('fs');
const bcrypt = require ("bcryptjs")

const model = {
    directory: path.resolve(__dirname,"../data","users.json"),
    all: function (){
        return JSON.parse(fs.readFileSync(this.directory,"utf-8"))
    },
    one: function(id){
        return this.all().find(user => user.id == id);
    },
    findByEmail: function (email){
        return this.all().find(user => user.email == email)
    },
    new: function (data,file) {
        let users = this.all();
        let lastUser = users[users.length -1]
        let nuevo = {
            id: users.length > 0 ? lastUser.id + 1: 1,
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            fechaDeNacimiento: data.fechaDeNacimiento,
            domicilio: data.domicilio,
            clave: bcrypt.hashSync(data.clave, 10),
            image: file.filename 
        }    
        users.push(nuevo)
        fs.writeFileSync(this.directory,JSON.stringify(users,null,2));
        return true;    
    },
    delete: function (id){
        let users = this.all ()
        let finalUsers = users.filter (one => one.id !== id);
        fs.writeFileSync (this.directory, JSON.stringify (finalUsers, null, 2));
        return true
    }
}

module.exports = model;