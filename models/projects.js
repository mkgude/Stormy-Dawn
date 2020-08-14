module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [50]
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // volunteerId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: User,
    //     key: id
    //   }
    // },
    // npoId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: User,
    //     key: id
    //   }
    // }
  });

  // Project.associate = function(models) {
  //   Project.belongsTo(models.User, {
  //     role: {
  //       as: true,
  //       allowNull: false
  //     }
  //   });
  // };

  return Project;
};
