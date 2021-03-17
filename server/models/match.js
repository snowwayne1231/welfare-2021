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
    game: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Games',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    houseIdNow: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Houses',
        key: 'id'
      }
    },
    round: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mvp: DataTypes.INTEGER,
    shift: DataTypes.INTEGER,
    activity: DataTypes.INTEGER,
    add: DataTypes.INTEGER,
    minus: DataTypes.INTEGER,
    success: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};