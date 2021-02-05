'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insertData = [
      { name: '史塔克家族', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#a7a7a7', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '艾林家族', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#0400ff', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '徒利家族', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#e400ff', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '蘭尼斯特家族', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#ff0000', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '提利爾', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#00ff1f', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '拜拉席恩', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#e4df33', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '坦格利安', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#730000', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
      { name: '馬泰爾', leaderId: 0, land:0, score: 0, scorePersonal: 0, scoreTrophy: 0, rank: 0, color: '#ffa707', rankMove: 0, leaderMatchFamily: 0, sameDepartment: 0, totalFamilyAbility: 0, totalPartake: 0, createdAt: new Date(), updatedAt: new Date(), },
    ];
    
    return queryInterface.bulkInsert('Houses', insertData);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Houses', null, {});
  }
};
