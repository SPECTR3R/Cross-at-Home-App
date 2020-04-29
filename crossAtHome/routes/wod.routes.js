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
  createComment
} = require('../controllers/wod.controller');

router.get('/wods', listView);
router.get('/wod/:id', detailView);

router.get('/createWod', createWodView);
router.post('/createWod', createWodProcess);

router.get('/doWodView', doWodView);
router.post('/doWodView', doWodProcess);

router.get('/yourWods', yourWodsView);

router.post('/createComment', createComment);

module.exports = router;
