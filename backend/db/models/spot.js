'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here

    Spot.belongsTo(models.User, {
      foreignKey: 'ownerId'
    })

    Spot.hasMany(models.Booking, {
      foreignKey: 'spotId'
    })

    Spot.hasMany(models.Review, {
      foreignKey: 'spotOwnerId'
    })


  };
  return Spot;
};