/*var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost/book');
var db = mongoose.connection;


db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
  console.log("OK");
});

var title;
var img;
var TestSchema = new mongoose.Schema();
var TestModel = db.model("bookinfo",TestSchema,"bookinfo");
var bookcontent = db.model("bookcontent",TestSchema,"bookcontent");

TestModel.find({},{},function (err,all){
  title = all;
});


/!* GET home page. *!/
router.get('/', function(req, res, next) {
  console.log(title);
  res.render('index', { title: title});
});

router.get('/bookinfo', function(req, res){
  var bookid = req.query.id;


  bookcontent.find({"bookid":bookid},{},function (err,all){

    res.render('bookinfo',{
      info:all
    });

  });




});*/

var express = require('express');
var router = express.Router();
var db = require('./mongoose.js');



router.get('/', function(req, res, next) {

  db.bookinfo.find({},function (err,all){

    res.render('index', { title: all});

  });

});

module.exports = router;
