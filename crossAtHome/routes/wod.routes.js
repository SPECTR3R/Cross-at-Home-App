const express = require('express');
const router = express.Router();

const {
  listView,
  detailView,
  crearPost,
  createPostProcess,
} = require('../controllers/wod.controller');

router.get('/wods', listView);
router.get('/wod/:id', detailView);

router.get('/create', crearPost);
router.post('/create', createPostProcess);

module.exports = router;
