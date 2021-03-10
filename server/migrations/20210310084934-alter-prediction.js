'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Predictions',
      'num',
      Sequelize.INTEGER
    );
    return queryInterface.addColumn(
      'Predictions',
      'target',
      Sequelize.STRING
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Predictions', 'num');
    return queryInterface.removeColumn('Predictions', 'target');
  }
};
