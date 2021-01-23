'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Match.init({
    round: DataTypes.INTEGER,
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    mvp: DataTypes.INTEGER,
    shift: DataTypes.INTEGER,
    activity: DataTypes.INTEGER,
    add: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};