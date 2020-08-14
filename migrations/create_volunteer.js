'use strict'
module.exports = {
    up: (queryInterface, sequelize) => {

        return queryInterface.createTable("Volunteer", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            biography: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [50]
                }
            },
            languages: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            linkedin: {
                type: DataTypes.STRING
            },
            github: {
                type: DataTypes.STRING
            },
            portfolio: {
                type: DataTypes.STRING
            }


        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable("Volunteer");



    }
}