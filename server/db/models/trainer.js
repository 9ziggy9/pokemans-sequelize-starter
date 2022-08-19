'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer.belongsToMany(models.Pokeman, {through: models.TrainerPokeman});
    }
  }
  Trainer.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    hometown: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};
