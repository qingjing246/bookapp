
/**
 * Created by Administrator on 2017-04-19.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

        res.render('read', { info: "阅读器" })


});

module.exports = router;