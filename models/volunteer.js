module.exports = function (sequelize, DataTypes) {
  const Volunteer = sequelize.define("Volunteer", {
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
  });
  return Volunteer;
};
