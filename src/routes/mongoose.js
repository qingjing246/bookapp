/**
 * Created by Administrator on 2017-04-19.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/book');
var db = mongoose.connection;



db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
    //一次打开记录
    console.log("mongodb OK");
});

var TestSchema = new mongoose.Schema();
db.bookinfo = db.model("bookinfo",TestSchema,"bookinfo");
db.bookcontent = db.model("bookcontent",TestSchema,"bookcontent");
db.name = "qingjing";


module.exports = db;