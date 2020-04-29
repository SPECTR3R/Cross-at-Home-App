const express = require('express');
const router = express.Router();

const {
  listView,
  detailView,
  yourWodsView,
  createWodView,
  createWodProcess,
  doWodView,
  doWodProcess,
  createComment,
} = require('../controllers/wod.controller');

const { isLoggedIn } = require('../middlewares');

router.get('/wods', isLoggedIn, listView);
router.get('/wod/:id', isLoggedIn, detailView);

router.get('/createWod', isLoggedIn, createWodView);
router.post('/createWod', isLoggedIn, createWodProcess);

router.get('/doWodView/:id', isLoggedIn, doWodView);
router.post('/doWodView', isLoggedIn, doWodProcess);

router.get('/yourWods', isLoggedIn, yourWodsView);

router.post('/createComment/:id', isLoggedIn, createComment);

module.exports = router;
