/**
 * Created by Administrator on 2017-04-19.
 */
var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');
var a ;
var b ;



router.get('/', function (req, res, next) {

    var bookid = req.query.id;
    db.bookcontent.find({ "bookid" : bookid },null,{sort:{"id":1}},function (err, all) {
       a = all;
        db.bookinfo.find({ "id" : bookid },null,{limit:1},function (err, all) {
            b = all;
            res.render('bookinfo', { info: a,title:b})
        });

    });


});


module.exports = router;