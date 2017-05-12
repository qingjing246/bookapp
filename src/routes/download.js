/**
 * Created by Administrator on 2017-04-19.
 */
var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');
var fs = require('fs');
var a;
var b;
router.get('/', function (req, res, next) {
    var bookid = req.query.id;
    db.bookcontent.find({ "bookid" : bookid },null,function (err, all) {
        a = all;
        db.bookinfo.find({ "id" : bookid },null,function (err, all) {
            b = all;
            fs.writeFile('a.txt',JSON.stringify(a),function(err){
                if(err){
                    console.log(err)
                }
                res.download('./a.txt');
            });
        });

    });
        //绝对路径


});

module.exports = router;