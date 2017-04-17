var execFile = require("child_process").execFile;
var a = "我饿了";
phantom.outputEncoding = "gb2312";

var obj = {
    "a":1,
    "b":2
};
child = execFile('node', ['main.js', JSON.stringify(obj)], null,
    function (err, stdout, stderr) {

        console.log(stdout);
        console.log("execFileSTDERR:", JSON.stringify(stderr));
    });
setTimeout(function () {
    phantom.exit(0)
}, 2000);

/*phantomjs other.js*/