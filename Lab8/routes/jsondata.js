var express = require('express');
var router = express.Router();

/* POST jsondata page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.render('formdata.ejs', req.body);
});

module.exports = router;