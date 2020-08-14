module.exports = function(sequelize, DataTypes) {
  const NPO = sequelize.define("NPO", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contactName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING
    }
  });

  NPO.associate = function(models) {
    NPO.hasMany(models.Projects, {
      onDelete: "cascade"
    });
  };

  return Post;
};
