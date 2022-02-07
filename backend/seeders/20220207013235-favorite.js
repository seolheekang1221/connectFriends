'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('favorites', [
      {
        favoriteId: 1,
        userId: 2,
        address: '1111 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 2,
        userId: 1,
        address: '2222 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 3,
        userId: 2,
        address: '3333 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 4,
        userId: 5,
        address: '4444 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 5,
        userId: 2,
        address: '5555 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 6,
        userId: 2,
        address: '6666 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favoriteId: 7,
        userId: 2,
        address: '7777 example street',
        visitedDate: '11/22/11',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
