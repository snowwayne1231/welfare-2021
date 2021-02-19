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
      wis: 0,
      int: 0,
      cha: 0,
      strLv: '-',
      dexLv: '-',
      conLv: '-',
      wisLv: '-',
      intLv: '-',
      chaLv: '-',
      status: 1,
      thankTimes: 0,
      gender: 1,
      partake: 0,
      mvp: 0,
      json: '{}',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const mvp_score_map = {
      '-1': 99999,
      '0': 0,
      '1': 3,
      '2': 3,
      '3': 2,
      '4': 2,
      '5': 1,
      '6': 1,
      '7': 1,
    }


    staff.map(s => {
      const next = {...template};
      const eng_name_splited = s.name_en.split(' ');
      next.firstName = eng_name_splited[0];
      next.lastName = eng_name_splited[1];
      next.departmentName = s.department;
      next.code = s.code;
      next.name = s.name;
      next.gender = s.gender;
      next.mvp = s.mvp > 0 ? 1 : s.mvp;
      const _score = mvp_score_map[s.mvp];
      next.rv = _score;
      next.json = JSON.stringify({'before_mvp_score': _score});
      next.title = next.firstName + '|' + s.code;
      if (_score > 999) {
        next.thankTimes = 999;
      }
      // for test
      if (false) {
        next.str = Math.floor(Math.random() * 70) + 30;
        next.dex = Math.floor(Math.random() * 70) + 30;
        next.con = Math.floor(Math.random() * 70) + 30;
        next.wis = Math.floor(Math.random() * 70) + 30;
        next.cha = Math.floor(Math.random() * 70) + 30;
        next.nickname = new Array(Math.floor(Math.random()*5)+2).fill(0).map(e => String.fromCharCode( Math.floor(Math.random()*(0x4E00-0x9FA5))+0x9FA5 )).join('');
      }

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
