'use strict'
module.exports = {
    up: (queryInterface, sequelize) => {

        return queryInterface.createTable("NPO", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            contactName: {
                type: DataTypes.TEXT,
                allowNull: false,
                len: [1]
            },
            contactEmail: {
                type: DataTypes.STRING,
                allowNull: false,
                len: [1]
            },
            biography: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            website: {
                type: DataTypes.STRING
            }

        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable("NPO");



    }
}