'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entry', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      value: { 
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      date: { 
        type: DataTypes.DATE,
        allowNull: false
      },
      account: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('entry');
  }
};
