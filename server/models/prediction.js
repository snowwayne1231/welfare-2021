'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Prediction.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    houseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'id'
      }
    },
    round: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prediction',
  });
  return Prediction;
};