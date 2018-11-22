const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorHandler = require('./error-handler');

/*
* Load the environment files
*/
require('dotenv').config(process.cwd(), '.env');

/*
* For parsing the user input
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/*
* Single instance for the entire application to access models
*/
app.set('models', require('../models'));
/*
* Load the parent routes
*/
app.use('/', require('./routes'));

/*
* Handle the application errors here
*/
app.use((err, req, res, next) => {
  const filteredError = errorHandler(err);
  res.status(filteredError.statusCode).json(filteredError);
});

/*
* Entry route when the app starts
*/
app.get('/', (req, res) => res.send('API up and running'));

module.exports = {
  app,
};
