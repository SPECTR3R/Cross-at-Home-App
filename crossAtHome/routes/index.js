const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares')


/* GET home page */

router.get('/', isNotLoggedIn, (req, res, next) => {
  res.render('index');
});


module.exports = router;
