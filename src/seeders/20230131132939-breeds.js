'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Breeds', [
      {
        name: "Bullmastiff"
      },
      {
        name: "Ratonero Murciano de Huerta"
      },
      {
        name:"English Springer Spaniel"
      },
      {
        name:"Podenco Valenciano"
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Breeds');
  }
};
