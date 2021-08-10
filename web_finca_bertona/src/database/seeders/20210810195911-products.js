'use strict';

const product = require ("../../models/product")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const all = product.all()
    await queryInterface.bulkInsert('products', all);
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('products', null, {});
  }
};