'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          last_name:{
            type: Sequelize.STRING,
            allowNull: false
          },
          email:{
            type: Sequelize.STRING,
            allowNull: false
          },
          admin:{
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          birth_date:{
            type: Sequelize.DATE,
            allowNull: false
          },
          address:{
            type: Sequelize.STRING,
            allowNull: false
          },
          password:{
            type: Sequelize.STRING,
            allowNull: false
          },
          image:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "guestUserDefault.png"
          },          
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
        })      
    } catch (error) {
      throw error;
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable ("users")
    } catch (error) {
      throw error;
    }
  }
};
