/*
http://www.baidu.com
 */
/*
搭建一个服务器
需要使用node提供的模块 http
 */
// var http = require("http");
// var server = http.createServer();
// server.on('error',function(err){
// 	console.log(err);
// })
// server.on("request",function(req,res){
// 	console.log(req);
// })
// server.listen(80,"localhost");
//console.log(server.address());undefined
var fs = require("fs");
fs.writeFileSync("./http2.js");