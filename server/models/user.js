'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    code: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
    departmentName: DataTypes.STRING,
    houseId: DataTypes.INTEGER,
    houseIdTmp: DataTypes.INTEGER,
    title: DataTypes.STRING,
    rv: DataTypes.INTEGER,
    isLeader: DataTypes.BOOLEAN,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    con: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    strLv: DataTypes.STRING,
    dexLv: DataTypes.STRING,
    conLv: DataTypes.STRING,
    intLv: DataTypes.STRING,
    chaLv: DataTypes.STRING,
    status: DataTypes.INTEGER,
    thankTimes: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    partake: DataTypes.INTEGER,
    mvp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};