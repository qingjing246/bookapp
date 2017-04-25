var page = require('webpage').create();
var execFile = require("child_process").execFile;

var Url = 'http://www.quanshuwu.com/category/2_1_1.aspx';
var allurl =[];
var allNB ;

headr(Url);

//打开首页
function headr(url) {
    page.open(url, function (status) {
        console.log(status);
        allurl = page.evaluate(function () {
            var a =document.getElementsByClassName('storelistbt5a');
            var b = [];
            for(var i = 0; i < a.length;i++){
                b.push(a[i].querySelector('a').href);
            }
            return b;
        });

        console.log("--------所有章节" + allurl);
        zhangjie(allurl[0]);
    });
}

function zhangjie(url){
    console.log(url);
    page.open(url,function(status){
        console.log(status);
        var info = page.evaluate(function () {
            var name = document.getElementsByClassName('ti')[0].querySelector('h1').innerText;
            var author = document.getElementsByClassName('ti')[0].querySelector('p').innerText.substring(3);
            var bookinfo = document.getElementById('bookintroinner').innerText;
            var type = document.getElementsByClassName('ti')[0].querySelector('a').innerText;
            var onepage = document.getElementById('readlist').querySelector('a').href;
            allNB = document.getElementById('readlist').querySelectorAll('li').length;
            var a = [name,author,bookinfo,type,onepage];

            return a;
        });
        console.log(info);
        allpage(info[5]);
    })
}

function allpage(url){
    console.log(url);

    page.open(url,function(status){
        console.log(status);
        var title = document.getElementById('content').querySelector('h1').innerText;
        var update = document.getElementById('subleft').getElementsByTagName('font')[1].innerText;



    })



}