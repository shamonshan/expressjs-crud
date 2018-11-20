const Sequelize = require('sequelize');

const sequelize = new Sequelize(

  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  {

    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 100,
      min: 0,
      idle: 10000,
      acquire: 10000,
    },
  },
);

module.exports = sequelize;
