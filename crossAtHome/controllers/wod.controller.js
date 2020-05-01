const WodPost = require('../models/WodPost.model');
const WodAPI = require('../models/WodAPI.model');
const WodComment = require('../models/WodComment.model');

exports.listView = async (req, res) => {
  const wod = await WodPost.find().populate('userId').sort( { createdAt: -1 } );
  res.render('wod/allwod', { wod });
};

exports.detailView = async (req, res) => {
  const wod = await WodPost.findById(req.params.id)
    .populate('comments')
    .populate({ path: 'comments', populate: { path: 'userId', model: 'User' } }).populate('userId');
  wod.esElMismoUsuarioPost = false
  if ( String(wod.userId._id) === String(req.user._id) ){
    wod.esElMismoUsuarioPost = true
  }
  wod.usuarioConectado = req.user._id
  res.render('wod/detailWod',  wod );
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

exports.doWodView = async (req, res) => {
  const WOD = await WodPost.findById(req.params.id);
  const { wodName, wodFocus, duration, desc, level } = WOD;
  const { id: userId } = req.user;
  res.render('wod/doWod', { wodName, wodFocus, duration, desc, level, userId });
};

exports.doWodProcess = async (req, res) => {
  const post = await WodPost.create(req.body);
  res.redirect('/profile');
};

// exports.yourWodsView = async (req, res) => {
//   const wods = await WodPost.find({ userId: req.user.id })
//     .populate('comments')
//     .populate({ path: 'comments', populate: { path: 'userId', model: 'User' } });
//   res.render('wod/yourWods', { wods });
// };

exports.createComment = async (req, res) => {
  const comment = await WodComment.create({ userId: req.user.id, body: req.body.body });
  await WodPost.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: comment._id } },
    { new: true }
  );
  res.redirect(`/wod/${req.params.id}`);
};

exports.deleteComment = async (req, res) => {
  await WodComment.findByIdAndDelete(req.params.id);
  const { _id } = await WodPost.findOneAndUpdate(
    { comments: req.params.id },
    { $pull: { comments: req.params.id } }
  );
  res.redirect(`/wod/${_id}`);
};

exports.deleteWodPost = async (req, res) => {
  await WodPost.findByIdAndDelete(req.params.id);
  res.redirect(`/profile`);
};

exports.editCommentView = async (req, res) => {
  const comment = await WodComment.findById( req.params.id )
  res.render('wod/editComment',  comment )
}

exports.editCommentProcess = async ( req, res ) => {
  const wodPost = await WodPost.find( { comments: req.params.id } )
  await WodComment.findByIdAndUpdate( req.params.id, { $set: { ...req.body } }, { new: true } )
  res.redirect(`/wod/${wodPost[0]._id}`)
}

exports.editWodView = async (req, res) => {
  const Wod = await WodPost.findById( req.params.id )
  res.render('wod/editWod', Wod )
}

exports.editWodProcess = async ( req, res ) => {
  await WodPost.findByIdAndUpdate( req.params.id, { $set: { ...req.body } }, { new: true } )
  res.redirect(`/wod/${req.params.id}`)
}