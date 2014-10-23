var express = require('express');
var router = express.Router();

/**
 * Mapping for make order.
 */
router.get('/', function(req, res) {
  res.render('makeorder.html');
});

module.exports = router;