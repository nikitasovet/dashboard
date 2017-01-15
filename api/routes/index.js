var express = require('express');
var router = express.Router();

// Controller Defensif
var ctrlDefensif = require('../controllers/defensif.controllers.js');

// Controller Offensif
var ctrlOffensif = require('../controllers/offensif.controllers.js');

// Routes Defensif
router
    .route('/defensif')
    .get(ctrlDefensif.defensifGetAll);

router
  .route('/defensif/:defensifId')
  .get(ctrlDefensif.defensifGetOne);


// Routes Offensif
router
    .route('/offensif')
    .get(ctrlOffensif.offensifGetAll);

router
    .route('/offensif/:offensifId')
    .get(ctrlOffensif.offensifGetOne);


module.exports = router;
