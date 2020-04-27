const router = require('express').Router();
const passport = require('passport');

// Import controllers
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  profileGet,
  logout,
  loginFacebook,
  loginFacebookCb,
  loginGoogle,
  loginGoogleCb,
} = require('../controllers/auth.controller');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares/');

router.get('/signup', isNotLoggedIn, signupGet);
router.post('/signup', signupPost);

router.get('/login', isNotLoggedIn, loginGet);
router.post('/login', loginPost);

router.get('/auth/facebook', loginFacebook);
router.get('/auth/facebook/callback', loginFacebookCb);

router.get('/logout', logout);

//
router.get('/auth/google', loginGoogle);

router.get('/auth/google/callback', loginGoogleCb);

router.get('/profile', isLoggedIn, profileGet);

module.exports = router;
