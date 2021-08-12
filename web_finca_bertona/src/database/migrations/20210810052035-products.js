'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable(
        'products',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          brand_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'brands',
              key: 'id' },
            },
          year: {
            type: Sequelize.INTEGER,
          },
          varietal: {
            type: Sequelize.STRING
          },
          graduacion:{
            type: Sequelize.DECIMAL
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
            type: Sequelize.DECIMAL
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
        })      
    } catch (error) {
      throw error;
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable ("products")
    } catch (error) {
      throw error;
    }
  }
};