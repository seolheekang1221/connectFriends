'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    static associate(models) {
      Friends.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Friends.init(
    {
      friendsId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Friends',
      tableName: 'friends'
    }
  );
  return Friends;
};
