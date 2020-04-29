const WodPost = require('../models/WodPost.model');
const WodAPI = require('../models/WodAPI.model');
const WodComment = require('../models/WodComment.model');

exports.listView = async (req, res) => {
  const wod = await WodPost.find().populate('userId');
  res.render('wod/allwod', { wod });
};

exports.detailView = async (req, res) => {
  const wod = await WodPost.findById(req.params.id).populate('comments');

  console.log(wod)
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
  res.render('wod/doWod', { wodName, wodFocus, duration, desc, level, userId});
};

exports.doWodView = async (req, res) => {
  const WOD = await WodPost.findById( req.params.id )
  const { wodName, wodFocus, duration, desc, level } = WOD
  const { id: userId } = req.user
  res.render('wod/doWod', { wodName, wodFocus, duration, desc, level, userId});
};

exports.doWodProcess = async (req, res) => {
  const post = await WodPost.create(req.body);
  res.redirect('/profile');
};

exports.yourWodsView = async (req, res) => {
  const wods = await WodPost.find({ userId: req.user.id });
  res.render('wod/yourWods', { wods });
};

exports.createComment = async (req,res) => {
  const comment = await WodComment.create({ userId: req.user.id, body: req.body.body });
  console.log(req.params)
  console.log(comment._id)
  await WodPost.findByIdAndUpdate( req.params.id, { $push: { comments: comment._id } }, { new: true })
  res.redirect(`/wod/${req.params.id}`);
};
