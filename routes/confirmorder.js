var express = require('express');
var router = express.Router();


/**
 * Mapping for make order.
 */
router.get('/', function(req, res) {
    res.render('confirmorder.html', {adress : "123", telno :"345", food:"asdfasf"});
});

module.exports = router;