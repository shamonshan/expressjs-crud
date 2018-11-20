const sequelize = require('../core/db-config');
/*
* Add your models here
*/
const models = ['User'];

sequelize.sync();

models.forEach((model) => {
  module.exports[model] = sequelize.import(`${__dirname}/${model}`);
});

module.exports.sequelize = sequelize;
