"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          len: [1]
        }
      },
      biography: {
        type: Sequelize.TEXT,
        validate: {
          len: [1, 150]
        }
      },
      languages: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
      },
      portfolio: {
        type: Sequelize.STRING
      },
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // role true for npo, false for volunteer (determined via jquery)
      role: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      //website
      website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  }
};
