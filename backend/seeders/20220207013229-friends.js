'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('friends', [
      {
        friendsId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 1,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 5,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 5,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        friendsId: 2,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
