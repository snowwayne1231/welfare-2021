'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      round: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      mvp: {
        type: Sequelize.INTEGER
      },
      shift: {
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.INTEGER
      },
      add: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matches');
  }
};