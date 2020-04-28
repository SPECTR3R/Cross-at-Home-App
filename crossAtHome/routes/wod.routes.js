const express = require('express')
const router = express.Router()

const { listView, detailView } = require('../controllers/wod.controller')


router.get('/wods', listView)
router.get("/wod/:id", detailView);

module.exports = router