"use strict";const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {//eslint-disable-line
    queryInterface.bulkInsert(
      'users', [
      {
        nome: 'Paulo',
        email: 'paulo@gmail.com',
        password_hash: await bcryptjs.hash('8562kgjn', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Renata',
        email: 'renata@gmail.com',
        password_hash: await bcryptjs.hash('8562kgjn', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Alberto',
        email: 'alberto@gmail.com',
        password_hash: await bcryptjs.hash('8562kgjn', 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
      {});
  },

  down: () => { }
};
