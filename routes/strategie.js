const express = require('express');
const router = express.Router();
const strategieCtrl = require('../controllers/stragie');

router.post('/createStrategie', strategieCtrl.createStrategie);
router.post('/suppressionStrategie', strategieCtrl.suppressionStrategie);
router.post('/recuperationStrategie', strategieCtrl.recuperationStrategie);

module.exports = router;
