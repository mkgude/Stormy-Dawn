module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

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
      type: DataTypes.ARRAY,
      allowNull: false
    },
    volunteerId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: id
      }
    },
    npoId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: id
      }
    }
  });

  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      role: {
        as: true,
        allowNull: false
      }
    });
  };

  return Project;
};
