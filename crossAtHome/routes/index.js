const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import middlewares

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

/* GET home page */

router.get('/', isNotLoggedIn, (req, res, next) => {
 const error = req.flash('error');
  res.render('index', { error });
});

module.exports = router;
