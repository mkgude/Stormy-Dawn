module.exports = function (sequelize, DataTypes) {

    var Npo = sequelize.define("npo", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        NPOname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PhoneNumber: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PeojectsAuthor: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        created_at: DataTypes.DATE,
    });

    // Syncs with DB
    Npo.sync();

    Npo.associate = function (models) {

        Author.belongsTo(models.Projects, {
        });
    };
    Npo.associate = function (models) {
        Npo.hasMany(models.Volunteer, {
        });
    };
    return Npo;
};
