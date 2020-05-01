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

router.get('/x', (req, res, next) => {
  res.render('wod/doWod', {
    wodName: 'Rose',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Squat-Jumps, 20 seg Push-ups, 20 seg 20 seg Push-ups brazos abiertos, 20 seg Crunch, 20 seg abdominales bicicleta ',
    level: 'Principiante',
  });
});

module.exports = router;
