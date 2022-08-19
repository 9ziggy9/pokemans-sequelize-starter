'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainerPokeman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainerPokeman.init({
    hp: DataTypes.INTEGER,
    trainerId: DataTypes.INTEGER,
    pokeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainerPokeman',
  });
  return TrainerPokeman;
};