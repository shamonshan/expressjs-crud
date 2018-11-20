module.exports = (sequelize, DateTypes) => sequelize.define('User', {
  id: {
    autoIncrement: true,
    type: DateTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DateTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DateTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Email address already in use!',
    },
  },

});
