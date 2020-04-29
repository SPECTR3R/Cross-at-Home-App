const WodPost = require('../models/WodPost.model');
const WodAPI = require('../models/WodAPI.model');

exports.listView = async (req, res) => {
  const wod = await WodPost.find();
  res.render('wod/allwod', { wod });
};

exports.detailView = async (req, res) => {
  const wod = await WodPost.findById(req.params.id);
  res.render('wod/detailWod', wod);
};

exports.createWodView = (req, res) => {
  user = req.user;
  res.render('wod/createWod', user);
};

exports.createWodProcess = async (req, res) => {
  const { level } = req.body;
  const wods = await WodAPI.find({ level });
  const { wodName, wodFocus, duration, desc } = wods[Math.floor(wods.length * Math.random())];
  const { id: userId } = req.user;
  res.render('wod/doWod', { wodName, wodFocus, duration, desc, level, userId });
};

exports.doWodProcess = async (req, res) => {
  console.log(req.body);
  const post = await WodPost.create(req.body);
  res.redirect('/profile');
};

exports.yourWodsView = async (req, res) => {
  console.log(req.user.id);
  const wods = await WodPost.find({ userId: req.user.id });
  console.log(wods);
  res.render('wod/yourWods', { wods });
};
