/**
 * Created by Administrator on 2017-04-19.
 */
window.onload = function (){
    var a = document.getElementById('box');


    a.onclick = function (){
        ajax();
    };

    function ajax(){

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                xmlDoc = xmlhttp.responseText;
                alert("接受成功"+xmlDoc)
            }
        };

        xmlhttp.open("GET","/list",true);
        xmlhttp.send(null);

    }


};