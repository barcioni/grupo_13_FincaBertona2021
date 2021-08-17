'use strict';

const brand = require ("../../models/brand")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const all = brand.all()
    await queryInterface.bulkInsert('brands', all);
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('brands', null, {});
  }
};
