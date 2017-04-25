

var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');



router.get('/', function(req, res, next) {

  db.bookinfo.find({},null,{limit:3},function (err,all){

    res.render('index', { title: all});

  });

});

module.exports = router;
