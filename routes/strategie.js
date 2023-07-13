const express = require('express');
const router = express.Router();
const strategieCtrl = require('../controllers/strategie');

router.post('/createStrategie', strategieCtrl.createStrategie);
router.post('/suppressionStrategie', strategieCtrl.suppressionStrategie);
router.get('/recuperationStrategie', strategieCtrl.recuperationStrategie);

module.exports = router;
