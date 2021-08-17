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
            references: {
              model: 'brands',
              key: 'id' },
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
            type: dataTypes.DECIMAL.UNSIGNED
          },
          currency: {
            type: dataTypes.STRING
          },
          createdAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.NOW
          },
          updatedAt: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.NOW
          },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: "products"
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, { 
            as: "brands",
            foreignKey: "brand_id"
        })
    }

    return Product

};