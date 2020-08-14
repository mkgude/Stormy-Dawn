module.exports = function (sequelize, DataTypes) {

    var Project = sequelize.define("project", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        PeojectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProjectDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Languages: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
        },

        created_at: DataTypes.DATE,
    });



    Project.associate = function (models) {

        Project.hasMany(models.Npo, {
            onDelete: ""
        });
    };
    Project.associate = function (models) {

        Project.hasMany(models.Volunteer, {

        });
    };

    return Project;
};
