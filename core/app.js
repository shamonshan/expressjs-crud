const express = require('express');
const bodyParser = require('body-parser');

const app = express();


/*
* Load the environment files
*/
require('dotenv').config(process.cwd(), '.env');

/*
* For parsing the user input
*/
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

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
  res.status(500).json({
    message: 'An error occured',
    log: err,
  });
});

/*
* Entry route when the app starts
*/
app.get('/', (req, res) => res.send('API up and running'));

module.exports = {
  app,
};
