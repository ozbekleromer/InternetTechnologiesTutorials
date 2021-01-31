var express = require('express');
var router = express.Router();

/* POST formdata page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.render('formdata.ejs', req.body);
});

module.exports = router;