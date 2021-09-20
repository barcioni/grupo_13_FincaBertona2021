module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          brand_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            },
          year: {
            type: dataTypes.INTEGER.UNSIGNED,
          },
          varietal: {
            type: dataTypes.STRING
          },
          graduacion:{
            type: dataTypes.DECIMAL.UNSIGNED
          },
          barrica: {
            type: dataTypes.STRING(400)
          },
          guarda:{
            type: dataTypes.STRING(400)
          },
          description:{
            type: dataTypes.TEXT
          },
          image:{
            type: dataTypes.STRING(400)
          },
          price:{
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
          },
          currency: {
            type: dataTypes.STRING
          },
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        tableName: "products"
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, { 
            as: "brands",
            foreignKey: "brand_id"
        })
        Product.hasMany(models.Cart, { 
          as: "carts",
          foreignKey: "product_id"
      })
    }

    return Product

};