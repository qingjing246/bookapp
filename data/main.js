
var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/book';


var a = JSON.parse(process.argv[2]);
//console.log(a);
var insertData = function(db,callback){
    /*var DB = db.collection(a[2]);
    //插入数据

    });*/
    var collectioninfo = db.collection("bookinfo");
    var collectioncontent = db.collection("bookcontent");
    var createDate = new Date();

    if(a.length >6 ){

        //插入头部信息
        var headData = [{"id":a[2],"name":a[3],"author":a[4],"info":a[5],"imgUrl":a[6],"upDataDate":a[7],"createDate":createDate}];
        collectioninfo.insert(headData,function(err,result){
            callback(result);
        })
    }else{
        //插入章节信息
        var textData =[{"id":a[0],"bookid":a[1],"title":a[2],"content":a[3],"url":a[4]}];
        collectioncontent.insert(textData,function(err,result){
            callback(result);
        })
    }

};

Mongoclient.connect(DB_url,function(err,db){
    console.log('连接成功');
    insertData(db,function(result){
        //console.log(result);
        db.close();
    })

});
