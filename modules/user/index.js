const express = require('express');

const router = express.Router();

const { create } = require('./user.controller');

router.get('/create', create);

module.exports = router;
