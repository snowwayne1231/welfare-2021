'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const loc = await queryInterface.rawSelect('Configs', {}, ['id']);
    if (loc) {
      return false;
    }
    const insertData = [
      { name: 'prediction', status: 0, setting: 0, createdAt: new Date(), updatedAt: new Date() },
      { name: 'vote', status: 0, setting: 0, createdAt: new Date(), updatedAt: new Date() },
      { name: 'countryside', status: 0, setting: 0, createdAt: new Date(), updatedAt: new Date() },
    ];

    return queryInterface.bulkInsert('Configs', insertData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Configs', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
