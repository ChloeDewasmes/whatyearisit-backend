var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const year = new Date();
    res.json( { year: year.getFullYear().toString() } );
});

module.exports = router;