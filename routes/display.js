const express = require('express');
const router = express.Router();

const {displayAboutEveryone} = require('../controllers/displayController')

router.route('/').get(displayAboutEveryone);

module.exports = router;