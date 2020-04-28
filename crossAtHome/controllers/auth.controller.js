const User = require('../models/User.model');
const passport = require('../config/passport');

exports.signupPost = (req, res) => {
  const { name, email, password, verify } = req.body;
  let error = {
    message: 'The passwords doesnt match',
  };

  if (password !== verify) {
    return res.render('index', error);
  } else {
    User.register({ name, email }, password)
      .then(() => {
        passport.authenticate('local')(req, res, () => {
          res.redirect('/profile');
        });
      })
      .catch(err => {
        error.message = err.message;
        return res.render('index', error);
      });
  }
};

exports.loginPost = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: ('/'),
});

exports.loginFacebook = passport.authenticate('facebook', { scope: ['email'] });

exports.loginFacebookCb = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
  scope: ['email'],
});

exports.loginGoogle = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ],
});

exports.loginGoogleCb = passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/',
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
