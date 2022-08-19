'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainerPokemans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER,
	allowNull: false
      },
      hunger: {
	type: Sequelize.INTEGER,
	allowNull: false
      },
      trainerId: {
        type: Sequelize.INTEGER,
	allowNull: false,
	references: {model: 'Trainers'}
      },
      pokeId: {
        type: Sequelize.INTEGER,
	allowNull: false,
	references: {model: 'Pokemans'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TrainerPokemans');
  }
};
