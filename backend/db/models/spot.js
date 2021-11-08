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
  };
  return Spot;
};