'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: 'leader',
        sourceKey: 'leaderId',
        // foreignKey: 'leaderId',
      });
    }
  };
  House.init({
    en: DataTypes.STRING,
    name: DataTypes.STRING,
    leaderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    land: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    scorePersonal: DataTypes.INTEGER,
    scoreTrophy: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    color: DataTypes.STRING,
    rankMove: DataTypes.INTEGER,
    leaderMatchFamily: DataTypes.INTEGER,
    sameDepartment: DataTypes.INTEGER,
    totalFamilyAbility: DataTypes.INTEGER,
    totalPartake: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};