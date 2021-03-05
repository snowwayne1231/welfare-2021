'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Config.init({
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    setting: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};