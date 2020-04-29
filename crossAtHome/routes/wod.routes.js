const express = require('express');
const router = express.Router();

const { createWodView,createWodProcess,doWodProcess } = require('../controllers/wod.controller');

router.get('/createWod', createWodView);
router.post('/createWod', createWodProcess);

//router.post('/doWodView', doWodView); to do
router.post('/doWodView', doWodProcess);



module.exports = router;
