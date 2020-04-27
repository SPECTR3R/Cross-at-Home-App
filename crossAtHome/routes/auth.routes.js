const router = require('express').Router()
const passport = require('passport')

const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  profileGet,
  logout,
  loginFacebook,
  loginFacebookCb,
} = require('../controllers/auth.controller')

const { isLoggedIn, isNotLoggedIn } = require('../middlewares/auth.middleware')

router.get('/signup', isNotLoggedIn, signupGet)
router.post('/signup', signupPost)

router.get('/login', isNotLoggedIn, loginGet)
router.post('/login', loginPost)

router.get('/auth/facebook', loginFacebook)
router.get('/auth/facebook/callback', loginFacebookCb)

router.get('/profile', isLoggedIn, profileGet)

router.get('/logout', logout)

module.exports = router
