'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Result.init({
    game: DataTypes.STRING,
    ranking: DataTypes.STRING,
    json: {
      type: DataTypes.TEXT,
      // get: function() {
      //   return JSON.parse(this.getDataValue("json"));
      // },
      // set: function(value) {
      //   return this.setDataValue("json", JSON.stringify(value));
      // },
    },
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};