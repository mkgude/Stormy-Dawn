module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
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
    }
  });

  Project.associate = function(models) {
    Project.belongsTo(models.NPO, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};
