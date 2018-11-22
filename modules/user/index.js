const express = require('express');

const router = express.Router();

const { get, create, edit } = require('./user.controller');

router.get('/get', get);
router.post('/create', create);
router.put('/edit/:id', edit);
module.exports = router;
