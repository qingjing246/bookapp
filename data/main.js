
//var a = JSON.parse(process.argv[2]);


var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/qingjing';


var a = JSON.parse(process.argv[2]);
//console.log(a);
var insertData = function(db,callback){
    //新建表格
    //db.createCollection('tb1');
    //插入列表
    var collection = db.collection('tb1');
    //插入数据
    var data =[{"name":a[0],"main":a[1],"url":a[2]}];
    collection.insert(data,function(err,result){

        callback(result);
    })
};

Mongoclient.connect(DB_url,function(err,db){
    console.log('连接成功');
    insertData(db,function(result){
        //console.log(result);
        db.close();
    })

});
