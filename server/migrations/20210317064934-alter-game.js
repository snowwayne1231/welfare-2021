'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Games',
      'VideoLink',
      {type: Sequelize.TEXT, defaultValue: ''}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Games', 'VideoLink');
  }
};
