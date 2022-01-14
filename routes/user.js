const express = require('express');
const router = express.Router();

const {addAboutYou} = require('../controllers/userController')

router.route('/addaboutyou').post(addAboutYou);

module.exports = router;