module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
          },
          product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
          },
          quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
          },
          current_price: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          release_date: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.DATE
          }

    };
    let config = {
        timestamps: false,
        tableName: "carts"
    }
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, { 
            as: "user",
            foreignKey: "user_id"
        })
        Cart.belongsTo(models.Product, { 
            as: "product",
            foreignKey: "product_id"
        })
    }

    return Cart
};