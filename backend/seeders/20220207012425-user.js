'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        userId: 1,
        name: 'soul',
        password: 'soul',
        email: 'lee.soul@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'jingu',
        password: 'jingu',
        email: 'jingu@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'seolhee',
        password: 'seolhee',
        email: 'seolhee@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: 'dunhill',
        password: 'dunhill',
        email: 'dunhill@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        name: 'lyn',
        password: 'lyn',
        email: 'lyn@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        name: 'dunhill',
        password: 'dunhill',
        email: 'dunhill@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        name: 'kachu',
        password: 'kachu',
        email: 'kachu@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
