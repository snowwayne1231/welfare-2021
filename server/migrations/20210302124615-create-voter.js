'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Voters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      houseId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      vote: {
        type: Sequelize.INTEGER
      },
      voteTwo: {
        type: Sequelize.INTEGER
      },
      voteThree: {
        type: Sequelize.INTEGER
      },
      round: {
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
    }, {
      indexes: [{
        fields: ['round'],
        using: 'gin',
        operator: 'jsonb_path_ops'
      }]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Voters');
  }
};