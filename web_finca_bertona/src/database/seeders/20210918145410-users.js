'use strict';

const user = require ("../../models/user")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const all = user.all()
    await queryInterface.bulkInsert('users', all);
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('users', null, {});
  }
};
