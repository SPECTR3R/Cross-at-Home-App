const WodPost = require('../models/WodPost.model');

exports.listView = async (req, res) => {
  const wod = await WodPost.find();
  res.render('wod/allwod', { wod });
};

exports.detailView = async (req, res) => {
  const wod = await WodPost.findById(req.params.id);
  res.render('wod/detailWod', wod);
};

exports.crearPost = async (req, res) => {
  res.render('wod/createWod');
};

exports.createPostProcess = async (req, res) => {
  const { userId } = req.user.id;
  const { wodName, wodFocus, duration, desc, level, record } = req.body;
  const perfil = await WodPost.register({ wodName, wodFocus, duration, desc, level, record, userId });
  res.redirect('/wods');
};
