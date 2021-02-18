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
    houseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'id'
      }
    },
    houseIdTmp: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    rv: DataTypes.INTEGER,
    isLeader: DataTypes.BOOLEAN,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    con: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    strLv: DataTypes.STRING,
    dexLv: DataTypes.STRING,
    conLv: DataTypes.STRING,
    wisLv: DataTypes.STRING,
    intLv: DataTypes.STRING,
    chaLv: DataTypes.STRING,
    status: DataTypes.INTEGER,
    thankTimes: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    partake: DataTypes.INTEGER,
    mvp: DataTypes.INTEGER,
    skillPointJson: DataTypes.STRING,
    json: {
      type: DataTypes.STRING,
      // get: function() {
      //   return JSON.parse((this.getDataValue("json") || {}))
      // },
      // set: function(val) {
      //   return this.setDataValue("json", JSON.stringify(val));
      // },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};