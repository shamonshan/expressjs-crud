const express = require('express');

const router = express.Router();

/*
* Parent route for the users
*/
router.use('/users', require('../modules/user'));

module.exports = router;
