'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pwd: {
        type: Sequelize.STRING
      },
      departmentName: {
        type: Sequelize.STRING
      },
      houseId: {
        type: Sequelize.INTEGER
      },
      houseIdTmp: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      rv: {
        type: Sequelize.INTEGER
      },
      isLeader: {
        type: Sequelize.BOOLEAN
      },
      str: {
        type: Sequelize.INTEGER
      },
      dex: {
        type: Sequelize.INTEGER
      },
      con: {
        type: Sequelize.INTEGER
      },
      wis: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      cha: {
        type: Sequelize.INTEGER
      },
      strLv: {
        type: Sequelize.STRING
      },
      dexLv: {
        type: Sequelize.STRING
      },
      conLv: {
        type: Sequelize.STRING
      },
      wisLv: {
        type: Sequelize.STRING
      },
      intLv: {
        type: Sequelize.STRING
      },
      chaLv: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      thankTimes: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.INTEGER
      },
      partake: {
        type: Sequelize.INTEGER
      },
      mvp: {
        type: Sequelize.INTEGER
      },
      skillPointJson: {
        type: Sequelize.STRING,
        defaultValue: '{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}',
        allowNull: false,
      },
      json: {
        type: Sequelize.STRING,
        defaultValue: '{}',
        allowNull: false,
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
    await queryInterface.dropTable('Users');
  }
};