/**
 * Created by qingjing on 17-4-23.
 */
var page = require('webpage').create();
var execfile = require('child_process').execFile;
var n = 0;
var url = 'http://www.dy2018.com/1/';

phantom.outputEncodings = 'utf-8';

listPage(url);


function listPage(u){
    page.open(u,function(status){
        console.log(status);
        var data = page.evaluate(function(){
            var option = document.getElementsByTagName('option').length;
            var all_table= document.getElementsByClassName('co_content8')[0].getElementsByTagName('table');
            var m = all_table.length;
            var arr = [];
            for(var i =0;i < all_table.length ; i++){
                arr.push(all_table[i].getElementsByTagName('a')[1].href);
            }
             data = {
                option:option,
                all_number:m,
                arr:arr
            };
            return data;
        });
        //console.log(JSON.stringify(data,undefined,4));
        page_info(data);
    })
}

function page_info(page_info){
    page.open(page_info.arr[n], function (status) {
        console.log(status);
        console.log('打开链接：'+page_info.arr[n]);

        var data = page.evaluate(function(){
            aaaa();
            var content = document.getElementsByClassName('co_content8')[0];
            var title = document.getElementsByClassName('title_all')[0].innerText;
            var rank = document.getElementsByClassName('rank')[0].innerText;
            var a  = document.getElementsByClassName('position')[0].getElementsByTagName('span')[1].getElementsByTagName('a');
            var type = a[0].innerText+'/'+a[1].innerText;
            var img_url = content.getElementsByTagName('img')[0].src;
            var updatatime = document.getElementsByClassName('updatetime')[0].innerText.substring(5);
            var p = document.getElementById('Zoom').getElementsByTagName('p');
            var updatahref =document.getElementsByTagName('anchor')[0].getElementsByTagName('a')[0].href;
            var arr =[];
            for(var i=0;i<p.length-6;i++){
                arr.push(p[i].innerText);
            }
            data = {
                title:title,
                rank:rank,
                type:type,
                img_url:img_url,
                updatatime:updatatime,
                movieinfo:arr,
                updatahref:updatahref
            };
            return data;
        });
        console.log(JSON.stringify(data,undefined,4));
    })
}

function aaaa(){
    document.getElementById("target_element_to_be_clicked"); var e = document.createEvent('MouseEvents'); e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); a.dispatchEvent(e);
}