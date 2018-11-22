const express = require('express');

const router = express.Router();

const { get, create } = require('./user.controller');

router.post('/create', create);
router.get('/get', get);

module.exports = router;
