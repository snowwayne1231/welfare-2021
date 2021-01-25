'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Game.init({
    name: DataTypes.STRING,
    gameNum: DataTypes.INTEGER,
    gameRound: DataTypes.INTEGER,
    video: DataTypes.STRING,
    json: {
      type: DataTypes.TEXT,
      get: function() {
        return JSON.parse(this.getDataValue("json"));
      },
      set: function(value) {
        return this.setDataValue("json", JSON.stringify(value));
      },
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};