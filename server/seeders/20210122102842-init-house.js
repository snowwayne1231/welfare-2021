'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insertData = [
      { en: 'stark', name: '史塔克', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#a7a7a7', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'eyrie', name: '艾林', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#0400ff', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'tully', name: '徒利', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#e400ff', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'lannister', name: '蘭尼斯特', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#ff0000', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'tyrell', name: '提利爾', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#00ff1f', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'baratheon', name: '拜拉席恩', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#e4df33', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'targaryen', name: '坦格利安', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#730000', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { en: 'martell', name: '馬泰爾', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#ffa707', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
    ];
    
    return queryInterface.bulkInsert('Houses', insertData);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Houses', null, {});
  }
};
