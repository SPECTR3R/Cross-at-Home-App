const WodAPI = require('../models/WodAPI.model');
const WodPost = require('../models/WodPost.model');

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
  res.redirect('/profile')
};
