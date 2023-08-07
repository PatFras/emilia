var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/about', usersController.about);
router.get('/contact', usersController.contact);
router.get('/music', usersController.music);

module.exports = router;
