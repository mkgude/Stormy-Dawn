module.exports = function (sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
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
    NPO_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: 'id'
      },
    },
    volunteer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: 'id'

      }
    }
  });

  Project.associate = function (models) {
    Project.hasMany(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};


