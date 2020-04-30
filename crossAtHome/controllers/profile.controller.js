const User = require('../models/User.model');
const WodPost = require('../models/WodPost.model');

exports.profileGet = (req, res) => {
  const { user } = req;
  res.render('profile/profile', user);
};

exports.profileEditGet = async (req, res) => {
  const { user } = req;
  res.render('profile/edit', user);
};

exports.profileEditPost = async (req, res) => {
  const { user } = req;
  const { url: imagePath, originalname: imageName } = req.file ? req.file : {url:user.imagePath, originalname: user.imageName};
  const perfil = await User.findByIdAndUpdate(user._id,{ $set: { ...req.body, imageName, imagePath } },{ new: true });
  res.redirect('/profile');
};

exports.allProfiles = async (req, res) => {
  const profiles = await User.find({}).sort({ name: 1 });
  res.render('profile/allProfiles', { profiles });
};

exports.profileIdView = async (req, res) => {
  const profileID = await User.findById(req.params.id);
  res.render('profile/profileFriend', profileID);
};

exports.profileIdView = async (req, res) => {
  const userId = req.params.id
  const wod = await WodPost.find({userId}).populate('userId');
  res.render('profile/profileFriend', { wod });
};