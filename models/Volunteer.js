
module.exports = function (sequelize, DataTypes) {
    var Volunteer = sequelize.define("volunteer", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // in case we have validate condition
            }

        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // in case we have validate condition
            }

        },
        AdditionalInfo: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                // in case we have validate condition
            }

        },
        Languages: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
            validate: {
                // in case we have validate condition
            }

        },
        created_at: DataTypes.DATE,
    });


    Volunteer.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Volunteer.belongsTo(models.Project, {

        });
    };


    return Volunteer;
};
