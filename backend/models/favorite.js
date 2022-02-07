'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Favorite.init(
    {
      favoriteId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      visitedDate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Favorite',
      tableName: 'favorites'
    }
  );
  return Favorite;
};
