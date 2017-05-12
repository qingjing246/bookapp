
var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');



router.get('/', function(req, res, next) {

    db.bookinfo.find({},null,{sort:{'id':-1},limit:10},function (err,all){

        res.render('nvsheng', { info: all});

    });

});

module.exports = router;

