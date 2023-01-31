'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Dogs', [
      {
        name: "Heath",
        age: 4,
        breed_id: 1 
      },
      {
        name: "Toy",
        age: 7,
        breed_id: 2 
      },
      {
        name: "Mack",
        age: 1,
        breed_id: 3 
      },
      {
        name: "Cedrick",
        age: 10,
        breed_id: 4 
      },
      {
        name: "Raleigh",
        age: 8,
        breed_id: 1 
      },
      {
        name: "Jeremie",
        age: 2,
        breed_id: 3
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Dogs')
  }
};
