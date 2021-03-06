'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trophy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trophy.init({
    name: DataTypes.STRING,
    add: DataTypes.INTEGER,
    ownerHouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Trophy',
  });
  return Trophy;
};