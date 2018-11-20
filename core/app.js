const express = require('express');

const app = express();

/*
* Load the environment files
*/
require('dotenv').config(process.cwd(), '.env');

app.use('/', require('./routes'));

app.get('/', (req, res) => res.send('API up and running'));

module.exports = {
  app,
};
