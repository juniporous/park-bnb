'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    posterId: DataTypes.INTEGER,
    spotOwnerId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: 'posterId'
    })

    Review.belongsTo(models.Spot, {
      foreignKey: 'spotOwnerId'
    })

  };
  return Review;
};