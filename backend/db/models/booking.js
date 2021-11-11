'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    spotOwnerId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here

    Booking.belongsTo(models.Spot, {
      foreignKey: 'spotId'
    })

    Booking.belongsTo(models.User, {
      foreignKey: 'clientId'
    })
    
  };
  return Booking;
};