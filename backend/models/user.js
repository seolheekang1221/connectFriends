'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.History, {
        as: 'history',
        foreignKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
        User.hasMany(models.Favorite, {
          foreignKey: 'userId',
          as: 'favorite',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }),
        User.hasMany(models.Friends, {
          foreignKey: 'userId',
          as: 'friends',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
    }
  }
  User.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
