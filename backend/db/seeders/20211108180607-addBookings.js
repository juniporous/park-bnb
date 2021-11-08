'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
     {
       spotId: 1,
       spotOwnerId: 1,
       clientId: 2,
       startDate: "2021-11-17",
       endDate: "2021-11-18",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      spotId: 1,
      spotOwnerId: 1,
      clientId: 2,
      startDate: "2021-11-29",
      endDate: "2021-11-30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      spotId: 2,
      spotOwnerId: 1,
      clientId: 2,
      startDate: "2021-11-29",
      endDate: "2021-11-30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      spotId: 7,
      spotOwnerId: 2,
      clientId: 1,
      startDate: "2021-11-29",
      endDate: "2021-11-30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      spotId: 8,
      spotOwnerId: 2,
      clientId: 1,
      startDate: "2021-11-29",
      endDate: "2021-11-30",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
