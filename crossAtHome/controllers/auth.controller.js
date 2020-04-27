const User = require('../models/User.model');
const passport = require('../config/passport');

exports.signupGet = (req, res) => {
  res.render('auth/signup');
};

exports.signupPost = (req, res) => {
  const { name, email, password, verify } = req.body;
  let error = 'The passwords doesnt match';

  if (password !== verify) {
    return res.render('auth/signup', error);
  } else {
    User.register({ name, email }, password)
      .then(() => res.redirect('/login'))
      .catch(err => {
        error = err.message;
        return res.render('auth/signup', error);
      });
  }
};

exports.loginGet = (req, res) => {
  res.render('auth/login');
};

exports.loginPost = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
});

exports.loginFacebook = passport.authenticate('facebook', { scope: ['email'] });

exports.loginFacebookCb = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  scope: ['email'],
});

exports.profileGet = (req, res) => {
  res.render('profile/profile');
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};

// exports.loginGoogle = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] });

// exports.loginGoogleCb = passport.authenticate('google', {
//   failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/place');
// }
