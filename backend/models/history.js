'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  History.init(
    {
      hisotryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      userLocation: DataTypes.STRING,
      friendLocation: DataTypes.STRING,
      midLocation: DataTypes.STRING,
      visitedDate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'History',
      tableName: 'histories'
    }
  );
  return History;
};
