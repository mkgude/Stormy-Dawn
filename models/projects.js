module.exports = function(sequelize, DataTypes) {
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
        len: [1, 500]
      }
    },
    language: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  });
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      role: {
        as: true,
        allowNull: false
      }
    });
  };
  // return project
  return Project;
};
