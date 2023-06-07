const express = require('express');
const router = express.Router();

const searchDataCtrl = require('../controllers/searchData');

router.post('/save', searchDataCtrl.saveTradeRequest);
router.get('/search', searchDataCtrl.searchData); // Ajoutez cette ligne pour la nouvelle route de recherche

module.exports = router;
