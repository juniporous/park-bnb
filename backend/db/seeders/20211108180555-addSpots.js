'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
    "Spots",
      [
        {
          name: "Office Parking Space",
          ownerId: 1,
          state: 'CA',
          city: 'San Francisco',
          address: '2719 Pacheco St.',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636348565/spot1_olpogs.png',
          description: 'Located at the northwest corner of the building',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sunset Apartment Spot",
          ownerId: 1,
          state: 'CA',
          city: 'San Francisco',
          address: '1642 47th Ave',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636348578/spot2_hpbxgs.png',
          description: 'South end of the upper basement level',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garage Spot",
          ownerId: 1,
          state: 'CA',
          city: 'San Francisco',
          address: '1328 29th Ave',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636348591/spot3_snt0ca.png',
          description: 'Located at the southeast corner of the building',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Inner Sunset Basement Spot",
          ownerId: 1,
          state: 'CA',
          city: 'San Francisco',
          address: '1490 18th Ave',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636348591/spot3_snt0ca.png',
          description: 'Next to the HVAC units in the basement',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outdoor Stacked Parking Space",
          ownerId: 1,
          state: 'CA',
          city: 'San Francisco',
          address: '2719 Pacheco St.',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636348805/spot5_xi6rjv.png',
          description: 'Located at the northwest corner of the building',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Street Office Parking Space",
          ownerId: 2,
          state: 'CA',
          city: 'San Francisco',
          address: '1935 32nd Ave',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636349695/spot7_yy4arw.png',
          description: 'Located next to the parking lot',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Office Parking Space",
          ownerId: 2,
          state: 'CA',
          city: 'San Francisco',
          address: '2146 46th Ave.',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636349674/spot6_iujjhj.png',
          description: 'Located at the northwest corner of the building',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outdoor Space",
          ownerId: 2,
          state: 'CA',
          city: 'San Francisco',
          address: '1968 Great Hwy',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636349661/spot4_d8ceg8.png',
          description: 'Spot 20 in outdoor lot',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yellow building parking spot",
          ownerId: 2,
          state: 'CA',
          city: 'San Francisco',
          address: '2324 Quintara St',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636349735/spot9_y7sagc.png',
          description: 'Big yellow building',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Industrial building spot",
          ownerId: 2,
          state: 'CA',
          city: 'San Francisco',
          address: '1743 35th Ave',
          imgUrl: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1636349820/spot18_ktlkmr.png',
          description: 'Located at the northwest corner of the building',
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
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
