module.exports = function (sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [50],
      },
    },
    languages: {
      type: DataTypes.STRING,
    },
    volunteer_email: {
      type: DataTypes.STRING,
    },
    volunteer_linkedin: {
      type: DataTypes.STRING,
    },
    volunteer_github: {
      type: DataTypes.STRING,
    },
    volunteer_portfolio: {
      type: DataTypes.STRING,
    },
  });
  return Volunteer;
};
