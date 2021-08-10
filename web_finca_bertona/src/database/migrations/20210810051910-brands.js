'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable(
        'brands',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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
      await queryInterface.dropTable ("brands")
    } catch (error) {
      throw error;
    }
  }
};
