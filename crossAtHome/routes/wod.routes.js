const express = require('express');
const router = express.Router();

const {
  listView,
  detailView,
  yourWodsView,
  createWodView,
  createWodProcess,
  doWodProcess,
} = require('../controllers/wod.controller');

router.get('/wods', listView);
router.get('/wod/:id', detailView);

router.get('/createWod', createWodView);
router.post('/createWod', createWodProcess);

//router.post('/doWodView', doWodView); to do
router.post('/doWodView', doWodProcess);

router.get('/yourWods', yourWodsView);

module.exports = router;
