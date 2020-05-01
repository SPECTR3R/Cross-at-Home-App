const express = require('express');
const router = express.Router();

const {
  listView,
  detailView,
  //yourWodsView,
  createWodView,
  createWodProcess,
  doWodView,
  doWodProcess,
  createComment,
  deleteComment,
  deleteWodPost,
  editCommentView,
  editCommentProcess,
  editWodView,
  editWodProcess,
} = require('../controllers/wod.controller');

const { isLoggedIn } = require('../middlewares');

// WOD's Routes

router.get('/wods', isLoggedIn, listView);
router.get('/wod/:id', isLoggedIn, detailView);

router.get('/createWod', isLoggedIn, createWodView);
router.post('/createWod', isLoggedIn, createWodProcess);

router.get('/doWodView/:id', isLoggedIn, doWodView);
router.post('/doWodView', isLoggedIn, doWodProcess);

//router.get('/yourWods', isLoggedIn, yourWodsView);

router.get('/editWodPost/:id', isLoggedIn, editWodView);
router.post('/editWodPost/:id', isLoggedIn, editWodProcess);

router.post('/deleteWod/:id', isLoggedIn, deleteWodPost)

// Comments Routes

router.post('/createComment/:id', isLoggedIn, createComment);

router.get('/editComment/:id', isLoggedIn, editCommentView);
router.post('/editComment/:id', isLoggedIn, editCommentProcess);

router.post('/deleteComment/:id', isLoggedIn, deleteComment);

module.exports = router;
