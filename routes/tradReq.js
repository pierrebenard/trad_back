const express = require('express');
const router = express.Router();

const tradCtrl = require('../controllers/tradReq');

router.post('/save', tradCtrl.saveTradeRequest);

module.exports = router;