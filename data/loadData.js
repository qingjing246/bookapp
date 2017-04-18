var page = require('webpage').create();
var execFile = require("child_process").execFile;

var allUrl = ['http://huayu.baidu.com/book/435979.html','http://huayu.baidu.com/book/650649.html'];
var headdata = '';
var bookInfo = '';
var pageNumber = 0;
var n = 0;
var m = 0;
var tt = new Date();
var child;

phantom.outputEncoding = "utf-8";
console.log(allUrl[m]);
headr(allUrl[m]);

//打开首页
function headr(url) {
    pageNumber = 0;
    tt = new Date();
    bookInfo = '';
    headdata = '';
    n = 0;
    page.open(url, function (status) {
        console.log(status);
        headdata = page.evaluate(function () {
            var id = document.body.getAttribute('bookid');
            var head = document.getElementsByClassName('lebg')[0];
            var title = head.getElementsByTagName('a')[0].innerText;
            var author = head.getElementsByTagName('a')[1].innerText;
            var introduce = document.getElementsByClassName('jj')[0].innerHTML;
            var imgUrl = document.getElementsByClassName('img')[0].getElementsByTagName('img')[0].src;
            var allPage = document.getElementsByClassName('more')[0].getElementsByTagName('a')[0].href;
            var pageOne = document.getElementsByClassName('chapname')[1].firstChild.href;
            var updateDate = new Date();

            bookInfo = [allPage, pageOne, id, title, author, introduce, imgUrl, updateDate];
            return bookInfo;
        });
        console.log("---------抬头信息" + JSON.stringify(headdata, undefined, 4));

        insert(headdata);
        pageN(headdata[0]);
        console.log("--------所有章节" + headdata[0])

    });
}

//打开所有章节
function pageN(url) {
    page.open(url, function (status) {
        console.log("-------所有章节打开成功" + status);
        pageNumber = page.evaluate(function () {
            //var pageN = document.getElementsByClassName('chapname').length - 1;
            var pageN = 10;
            return pageN;
        });
        console.log('--------一共有' + pageNumber + '章--------');
        pageInfo(headdata[1]);
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


        var t = page.evaluate(function () {

            var title = document.getElementsByClassName('tc')[1].getElementsByTagName('h2')[0].innerText;
            return title;
        });

        var container = [n, headdata[2], t, b, url];

        console.log("---------第" + n + "次------------");
        insert(container);

        var nextPage = page.evaluate(function () {
            var length = document.getElementsByClassName('key')[0].getElementsByTagName('a').length;
            var c = document.getElementsByClassName('key')[0].getElementsByTagName('a')[length - 1].href;
            return c;
        });


        if (n <= pageNumber - 1) {

            console.log(nextPage);
            pageInfo(nextPage);

        } else {
            //loadtitle(headdata);

            /*console.log(JSON.stringify(headdata, undefined, 4));*/
            tt = new Date - tt;
            console.log("-----------总共加载时间" + tt * 0.001 + "秒-------------");
            /*phantom.exit();*/
            console.log(m);
            if( m == allUrl.length -1){
                phantom.exit(0)
            }else{
                console.log("--------------开始下一本-------------");
                m ++;
                console.log(allUrl[m]);
                headr(allUrl[m]);
            }
        }
    })
}


//插入数据库
function insert(info) {
    child = execFile('node', ['main.js', JSON.stringify(info)], null,
        function (err, stdout, stderr) {
            //console.log(stdout);
        });
}
