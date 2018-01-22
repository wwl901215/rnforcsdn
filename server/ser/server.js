/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/22]
 *@date 2018/1/22
 *@description
 */
var PORT = 3000;//

var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine').types;//
var path=require('path');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath;
    if (pathname.endsWith("html")){
        realPath = path.join("../html", pathname);    //这里设置自己的文件名称;
    }else {
        realPath = path.join("../api", pathname);    //这里设置自己的文件名称;
    }
    console.log("realPath:" + realPath);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");