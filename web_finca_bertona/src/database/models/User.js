module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: Sequelize.BIGINT(10).UNSIGNED,
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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: "brands"
    }
    const User = sequelize.define(alias, cols, config);

    return User
};