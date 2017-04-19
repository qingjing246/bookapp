var express = require('express');
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

TestModel.find({},{},function (err,all){
  /*for(var i in all){
    console.log(all[i]._doc.id);
  }*/
  title = all;
  console.log(all.id);

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title});
});

module.exports = router;
