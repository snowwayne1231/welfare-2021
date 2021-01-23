'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      leaderId: {
        type: Sequelize.INTEGER
      },
      land: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      scorePersonal: {
        type: Sequelize.INTEGER
      },
      scoreTrophy: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      rankMove: {
        type: Sequelize.INTEGER
      },
      leaderMatchFamily: {
        type: Sequelize.INTEGER
      },
      sameDepartment: {
        type: Sequelize.INTEGER
      },
      totalFamilyAbility: {
        type: Sequelize.INTEGER
      },
      totalPartake: {
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
    await queryInterface.dropTable('Houses');
  }
};