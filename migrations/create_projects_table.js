'use strict'
module.exports = {
    up: (queryInterface, sequelize) => {

        return queryInterface.createTable("Project", {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [50]
                }
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: sequelize.DATE,
            updatedAt: sequelize.DATE,

        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable("Project");



    }
}