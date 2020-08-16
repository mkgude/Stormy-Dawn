"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 500]
        }
      },
      language: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable("Projects");
  }
};
