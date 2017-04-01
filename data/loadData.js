var page = require('webpage').create();
var fs = require('fs');
var mypath = 'bookdata.json';
var url = 'http://huayu.baidu.com/book/219667.html';
var headdata = '';
var bookInfo = '';
var pageNumber = 0;
var n = 0;
var t =new Date();
phantom.outputEncoding = "gb2312";

page.open(url, function (status) {
    console.log(status);

    headdata = page.evaluate(function () {
        var head = document.getElementsByClassName('lebg')[0];
        var title = head.getElementsByTagName('a')[0].innerText;
        var author = head.getElementsByTagName('a')[1].innerText;
        var introduce = document.getElementsByClassName('jj')[0].innerHTML;
        var imgUrl = document.getElementsByClassName('img')[0].getElementsByTagName('img')[0].src;
        var allPage = document.getElementsByClassName('more')[0].getElementsByTagName('a')[0].href;
        var pageOne = document.getElementsByClassName('chapname')[1].firstChild.href;
        bookInfo = {
            'name': title,
            'author': author,
            'introduce': introduce,
            'imgUrl': imgUrl,
            'allPage': allPage,
            'pageOne': pageOne,
            'zcontainer': []
        };


        return bookInfo;
    });
    console.log("---------抬头信息" + JSON.stringify(headdata, undefined, 4));

    pageN(headdata.allPage);
    console.log("--------所有章节" + headdata.allPage)

});

function pageN(url) {
    console.log("--------所有章节" + url);
    page.open(url, function (status) {
        console.log("-------所有章节打开成功" + status);
        pageNumber = page.evaluate(function () {
            var pageN = document.getElementsByClassName('chapname').length - 1;
            return pageN;
        });
        console.log('--------一共有' + pageNumber + '章--------');


        pageInfo(headdata.pageOne);

    })
}

function pageInfo(url) {
    console.log('----------下一章节页' + url);
    n++;

    page.open(url, function (status) {
        console.log('----------下一章节页打开状态' + status);

        var b = page.evaluate(function () {

            var a = document.getElementsByClassName('book_con')[0].innerHTML;
            return a;
        });


        var t =page.evaluate(function () {

            var  title = document.getElementsByClassName('tc')[1].getElementsByTagName('h2')[0].innerText;
            return title;
        });


        headdata.zcontainer[n-1] = {
            'title': t,
            'main':b
        };

        console.log("第" + n + "次");

        var nextPage = page.evaluate(function () {
            var length = document.getElementsByClassName('key')[0].getElementsByTagName('a').length;
            var c = document.getElementsByClassName('key')[0].getElementsByTagName('a')[length - 1].href;
            return c;
        });

        if (n <= pageNumber-1 ) {
            //console.log(JSON.stringify(headdata,undefined,4));
            //console.log(b);
            console.log(nextPage);
            pageInfo(nextPage);
        } else {

            // fs.write(mypath,JSON.stringify(headdata,undefined,4));
            fs.write(mypath, JSON.stringify(headdata, undefined, 4));
            console.log(JSON.stringify(headdata, undefined, 4));
            t = new Date() - t  ;
            console.log(t);
            phantom.exit();
        }
    })


}
