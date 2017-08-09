module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    returnStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  History.associate = (models) => {
    History.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  History.associate = (models) => {
    History.belongsTo(models.Book, {
      foreignKey: 'bookId',
    });
  };
  return History;
};

