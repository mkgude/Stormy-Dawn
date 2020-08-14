'use strict'
module.exports = {
    up: (queryInterface, sequelize) => {

        return queryInterface.createTable("user", {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            // The password cannot be null
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }

        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable("user");



    }
}