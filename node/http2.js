var http = require("http");
var url = require('url');
var fs = require('fs');
var server = http.createServer();
var HtmlDir = __dirname+'/html/';

server.on('request',function(req,res){
	var urlStr = url.parse(req.url);
	switch(urlStr.pathname){
		case "/":
			sendDate(HtmlDir+"index.html",req,res);

		break;
		case "/user":
			sendDate(HtmlDir+"2.html",req,res);
		break;
		
	}
});
function sendDate(file,req,res){
	console.log(file)
	fs.readFile(file,function(err,data){
		if(err){
			res.writeHead(404,{
				'content-type':'text/html;charset=utf-8'
			})
			res.end('<h1>页面不存在</h1>')
		}else{
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			})
			res.end(data);
		}
	})
}
server.listen(8080,"localhost");