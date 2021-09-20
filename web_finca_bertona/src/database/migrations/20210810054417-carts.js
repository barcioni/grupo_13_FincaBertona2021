'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable(
        'carts', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            },
          },
          product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'products',
              key: 'id'
            },
          },
          quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
          },
          current_price: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          release_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('NOW')
          }
        })
    } catch (error) {
      throw error;

    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable("carts")
    } catch (error) {
      console.log(error);
    }
  }
};