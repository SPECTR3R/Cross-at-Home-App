const WodPost = require('../models/WodPost.model')

exports.listView = async (req, res) => {
  const wod = await WodPost.find()
  res.render('wod/allwod', { wod })
}

exports.detailView = async (req, res) => {
  const wod = await WodPost.findById(req.params.id);
  res.render("wod/detailWod", wod);
};