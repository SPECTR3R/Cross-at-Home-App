const router = require('express').Router();
const passport = require('passport');

// Import controllers
const uploadCloud = require('../config/cloudinary');

const { isLoggedIn } = require('../middlewares');

const {
  profileGet,
  profileEditGet,
  profileEditPost,
  allProfiles,
  profileIdView,
  delProfile,
} = require('../controllers/profile.controller');

// Profile Routes

router.get('/profile', isLoggedIn, profileGet);

router.get('/profile/edit', isLoggedIn, profileEditGet);
router.post('/profile/edit', isLoggedIn, uploadCloud.single('profilePic'), profileEditPost);

router.get('/profile/all', allProfiles);

router.get('/profile/:id', isLoggedIn, profileIdView);

router.get('/profile/delete/:id', isLoggedIn, delProfile)

module.exports = router;
