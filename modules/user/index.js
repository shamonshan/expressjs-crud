const express = require('express');

const router = express.Router();

const { get, create } = require('./user.controller');

router.get('/get', get);
router.get('/create', create);
module.exports = router;
