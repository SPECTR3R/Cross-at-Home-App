const router = require('express').Router();
const passport = require('passport');

// Import controllers
const {
  signupPost,
  loginPost,
  logout,
  loginFacebook,
  loginFacebookCb,
  loginGoogle,
  loginGoogleCb,
} = require('../controllers/auth.controller');

const { isNotLoggedIn, isLoggedIn } = require('../middlewares/');

//Auth Routes
router.post('/signup', isNotLoggedIn, signupPost);
router.post('/login', isNotLoggedIn, loginPost);
router.get('/auth/facebook', loginFacebook);
router.get('/auth/facebook/callback', loginFacebookCb);
router.get('/auth/google', loginGoogle);
router.get('/auth/google/callback', loginGoogleCb);
router.get('/logout', isLoggedIn, logout);

module.exports = router;
