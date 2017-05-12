
/**
 * Created by Administrator on 2017-04-19.
 */
var express = require('express');
var router = express.Router();
var db = require('./mongoose');
/* GET users listing. */

router.get('/', function (req, res, next) {
        var bookid = req.query.bookid;
        var a = Number(req.query.id);
        db.bookcontent.find({'bookid':bookid ,'id' : a },function(err,all){
            res.render('read', { info: all })

        });



});

module.exports = router;