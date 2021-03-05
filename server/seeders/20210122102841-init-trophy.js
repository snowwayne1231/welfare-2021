'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const loc = await queryInterface.rawSelect('Trophies', {}, ['id']);
    if (loc) {
      return false;
    }

    const insertData = [
      { name: '獨孤求敗', ownerHouseId: 0, add: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: '工作不養閒人', ownerHouseId: 0, add: 20, createdAt: new Date(), updatedAt: new Date() },
      { name: '團隊不養懶人', ownerHouseId: 0, add: 30, createdAt: new Date(), updatedAt: new Date() },
      { name: '寸草春暉', ownerHouseId: 0, add: 40, createdAt: new Date(), updatedAt: new Date() },
      { name: '情投意合', ownerHouseId: 0, add: 50, createdAt: new Date(), updatedAt: new Date() },
      { name: '九淺一深', ownerHouseId: 0, add: 60, createdAt: new Date(), updatedAt: new Date() },
      { name: '如夢似幻', ownerHouseId: 0, add: 70, createdAt: new Date(), updatedAt: new Date() },
      { name: '含辛茹苦', ownerHouseId: 0, add: 80, createdAt: new Date(), updatedAt: new Date() },
      { name: '阿姨我不想努力了', ownerHouseId: 0, add: 90, createdAt: new Date(), updatedAt: new Date() },
      { name: '魚知水恩乃幸福之源', ownerHouseId: 0, add: 100, createdAt: new Date(), updatedAt: new Date() },
    ];
    return queryInterface.bulkInsert('Trophies', insertData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Trophies', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
