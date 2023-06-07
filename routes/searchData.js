const express = require('express');
const router = express.Router();

const tradCtrl = require('../controllers/tradReq');

router.post('/save', tradCtrl.saveTradeRequest);
router.get('/search', tradCtrl.searchData); // Ajoutez cette ligne pour la nouvelle route de recherche

module.exports = router;
