'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
    {
      posterId: 2,
      spotOwnerId: 1,
      description: 'great spot, would park there again anytime!!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      posterId: 2,
      spotOwnerId: 2,
      description: 'ngl, not crazy about this parking spot',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      posterId: 1,
      spotOwnerId: 8,
      description: 'best parking spot in the history of parking spots. I love it!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      posterId: 1,
      spotOwnerId: 7,
      description: 'I give this spot 3/10 stars. the pavement was cracked',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
