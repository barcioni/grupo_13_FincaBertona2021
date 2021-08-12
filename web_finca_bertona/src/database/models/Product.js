module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          brand_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
              model: 'brands',
              key: 'id' },
            },
          year: {
            type: Sequelize.INTEGER.UNSIGNED,
          },
          varietal: {
            type: Sequelize.STRING
          },
          graduacion:{
            type: Sequelize.DECIMAL.UNSIGNED
          },
          barrica: {
            type: Sequelize.STRING(400)
          },
          guarda:{
            type: Sequelize.STRING(400)
          },
          description:{
            type: Sequelize.TEXT
          },
          image:{
            type: Sequelize.STRING(400)
          },
          price:{
            type: Sequelize.DECIMAL.UNSIGNED
          },
          currency: {
            type: Sequelize.STRING
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
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