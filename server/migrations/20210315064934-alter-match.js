'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Matches',
      'minus',
      {type: Sequelize.INTEGER, defaultValue: 0}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Matches', 'minus');
  }
};
