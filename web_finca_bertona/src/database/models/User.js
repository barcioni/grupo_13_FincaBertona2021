module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: dataTypes.STRING,
            allowNull: false
          },
          apellido:{
            type: dataTypes.STRING,
            allowNull: false
          },
          email:{
            type: dataTypes.STRING,
            allowNull: false
          },
          admin:{
            type: dataTypes.BOOLEAN,
            allowNull: false
          },
          fechaDeNacimiento:{
            type: dataTypes.DATE,
            allowNull: false
          },
          domicilio:{
            type: dataTypes.STRING,
            allowNull: false
          },
          clave:{
            type: dataTypes.STRING,
            allowNull: false
          },
          image:{
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: "guestUserDefault.png"
          },
        //created_at: dataTypes.TIMESTAMP,
        //updated_at: dataTypes.TIMESTAMP,
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        tableName: "users"
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
      User.hasMany(models.Cart, { 
        as: "carts",
        foreignKey: "user_id"
    })
  }



    return User
};