'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('histories', [
      {
        hisotryId: 1,
        userId: 1,
        userLocation: 'Georgia',
        friendLocation: 'Florida',
        midLocation: 'Georgia',
        visitedDate: '12/01/21',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 2,
        userId: 1,
        userLocation: 'Georgia',
        friendLocation: 'California',
        midLocation: 'Texas',
        visitedDate: '02/02/19',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 3,
        userId: 2,
        userLocation: 'Canada',
        friendLocation: 'Florida',
        midLocation: 'Geogia',
        visitedDate: '02/02/12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 3,
        userId: 2,
        userLocation: 'Canada',
        friendLocation: 'California',
        midLocation: 'Wisconson',
        visitedDate: '02/02/20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 4,
        userId: 3,
        userLocation: 'Canada',
        friendLocation: 'England',
        midLocation: 'Ocean',
        visitedDate: '03/12/20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 5,
        userId: 4,
        userLocation: 'California',
        friendLocation: 'Georgia',
        midLocation: 'Texas',
        visitedDate: '02/02/17',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hisotryId: 6,
        userId: 6,
        userLocation: 'California',
        friendLocation: 'Georgia',
        midLocation: 'Mississippi',
        visitedDate: '12/30/19',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
