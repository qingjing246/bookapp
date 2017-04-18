var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost/book');
var db = mongoose.connection;


db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
    //一次打开记录
    console.log("OK");
});


var TestSchema = new mongoose.Schema();
var TestModel = db.model("bookcontent",TestSchema,"bookcontent");

TestModel.findOne({},function (err,all){
    console.log(all._doc.title);
});
/*
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})/!**
 * Created by Administrator on 2017-04-18.
 *!/
*/
