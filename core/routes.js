const express = require('express');

const router = express.Router();

router.use('/users', require('../modules/user'));

module.exports = router;
