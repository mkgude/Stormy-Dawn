"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      biography: {
        type: Sequelize.DataTypes.TEXT,
        validate: {
          len: [1, 150]
        }
      },
      languages: {
        type: Sequelize.DataTypes.STRING
      },
      linkedin: {
        type: Sequelize.DataTypes.STRING
      },
      github: {
        type: Sequelize.DataTypes.STRING
      },
      portfolio: {
        type: Sequelize.DataTypes.STRING
      },
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      //website
      website: {
        type: Sequelize.DataTypes.STRING
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
    await queryInterface.dropTable("Users");
  }
};
