
var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');
var a ;
var b ;


router.get('/', function (req, res, next) {
    var bookid = req.query.bookid;
    db.bookcontent.find({ "bookid" : bookid },null,{sort:{"id":1}},function (err, all) {
        a = all;
    });

    res.render('booklist', { booklist: a})
});


module.exports = router;