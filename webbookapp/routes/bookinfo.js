/**
 * Created by Administrator on 2017-04-19.
 */
var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');


router.get('/', function (req, res, next) {

    var bookid = req.query.id;

    db.bookcontent.find({ "bookid" : bookid }, function (err, all) {

        res.render('bookinfo', { info: all })

    })

});

module.exports = router;