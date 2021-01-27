'use strict';

const fs = require('fs');
const path = require('path');

const rawdata = fs.readFileSync(path.dirname(__filename) + '/../json/staff.json');
const staff = JSON.parse(rawdata);

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const insertData = [];
    const template = {
      firstName: 'Snow',
      lastName: 'Jhung',
      name: '',
      nickname: '',
      departmentName: '開發組',
      code: '',
      pwd: '',
      houseId: 0,
      houseIdTmp: 0,
      houseIdTmp: 0,
      title: '',
      rv: 0,
      isLeader: false,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      cha: 0,
      strLv: '-',
      dexLv: '-',
      conLv: '-',
      intLv: '-',
      chaLv: '-',
      status: 1,
      thankTimes: 0,
      gender: 1,
      partake: 0,
      mvp: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };


    staff.map(s => {
      const next = {...template};
      const eng_name_splited = s.name_en.split(' ');
      next.firstName = eng_name_splited[0];
      next.lastName = eng_name_splited[1];
      next.departmentName = s.department;
      next.code = s.code;
      next.name = s.name;
      next.gender = s.gender;

      insertData.push(next);
    });

    return queryInterface.bulkInsert('Users', insertData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
