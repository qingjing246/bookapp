
var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/qingjing';


var a = JSON.parse(process.argv[2]);
//console.log(a);


Mongoclient.connect(DB_url,function(err,db){
    console.log('创建成功');

    db.createCollection("tb3");


});