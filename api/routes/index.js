var express = require('express');
var router = express.Router();

var ctrlDefensif = require('../controllers/defensif.controllers.js')
var ctrlOffensif = require('../controllers/offensif.controllers.js');

// Defensif routes
router
    .route('/defensif')
    .get(ctrlDefensif.defensifGetAll);

router
  .route('/defensif/:defensifId')
  .get(ctrlDefensif.defensifGetOne);

  // Defensif routes
  router
      .route('/offensif')
      .get(ctrlOffensif.offensifGetAll);

  router
    .route('/offensif/:offensifId')
    .get(ctrlOffensif.offensifGetOne);

module.exports = router;
