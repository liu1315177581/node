// co123le.log('Hello Node.js');
// var a = 10;
// console.log(a);
// var d = new Date();
// console.log(d.getFullYear());
// function Person(){

// }
//console.log(__filename)
// var a = 100;
// module.exports = a;
// setInterval(function(){
// 	var d = new Date();

// 	console.log('现在是：'+d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日'+d.getHours()+':'d.getMinutes()+':'+d.getSeconds());
// },1000);
//console.log(process.env);
//console.log(process.pid)
//console.log(process.title)
// setTimeout(function(){
// 	process.exit();
// },5000)
//process.stdout.write("hello");
// process.stdin.resume();
// var a;
// var b;
// process.stdout.write("请输入a的值");
// process.stdin.on('data',function(chunk){
// 	if(!a){
// 		a = Number(chunk);
// 		process.stdout.write('请输入b的值：')
// 	}else{
// 		b = Number(chunk);
// 		process.stdout.write('结果是：'+(a+b));
// 	}
// })
// var bf = new Buffer(5);
// console.log(bf);
// bf[6] = 20;
// console.log(bf);
// var bf = new Buffer([1,2,3]);
// console.log(bf);
// var bf = new Buffer("miao",'utf-8')
// console.log(bf);
// var str = 'miaov';
// console.log(str.length);
// var bf = new Buffer(str);
// console.log(bf);
// var str1 = "秒味";
// var bf = new Buffer(str1);
// console.log(bf.length);
// process.stdout.write('请输入内容');
// process.stdin.resume();
// process.stdin.on('data',function(chunk){

// })
// var fs = require('fs');
// fs.open('hello2.js','r',function(err,fd){
// 	// console.log(err);
// 	// console.log(fd);
// 	if(err){
// 		console.log("文件打开失败");
// 	}else{
// 		console.log('文件打开成功')
// 	}
// })
// var fs = require('fs');
// fs.open('hello.js',"r",function(err,fd){
// 	console.log(err);
// })
// console.log("ok");
// var fs = require('fs');
// var fd = fs.openSync("hello.js","r");
// console.log(fd);

// var fs = require('fs');
// fs.open('hello2.js',"r",function(err,fd){
// 	if(err){
// 		console.log("文件打开失败")
// 	}else{
// 		//读取文件
// 		var bf1 = new Buffer('12345678');
// 		fs.read(fd,bf1,0,4,null,function(err){
// 			console.log(bf1);
// 		});
// 	}
// })
// var fs = require('fs');
// fs.open("1.txt","r+",function(err,fd){
// 	//当我们对打开的文件进行操作的时候，打开文件的模式应该是读写方式的
// 	//fd.write(fd,buffer,offset,length,[position])
// 	if(err){
// 		console.log("打开文件失败")
// 	}else{
// 		//var bf = new Buffer('123');
// 		// fs.write(fd,bf,0,3,5,function(err,fd){
// 		// 	console.log(arguments)
// 		// })
// 		// fs.write(fd,bf,0,3,5,function(){
// 		// 	console.log(arguments);
// 		// })
// 		//fs.write(fd,"1234",5,'utf-8');
// 		fs.write(fd,"123",5,"utf-8");
// 		fs.close();
// 	}
//})
// var fs = require('fs');
// var filename = "js.js";
// fs.exists(filename,function(err){
// 	if(!err){
// 		fs.writeFile(filename,"",function(err){
// 			if(err){
// 				console.log("出错了");
// 			}else{
// 				console.log("创建新文件成功");
// 			}
// 		})
// 	}else{
// 		fs.appendFile(filename,"",function(err){
// 			if(err){
// 				console.log("新文件追加失败");
// 			}else{
// 				console.log("新内容追加成功");
// 			}
// 		})
// 	}
// })
// var fs = require("fs");
// var filename = "js.js";
// if(!fs.existsSync(filename)){
// 	fs.writeFileSync(filename,"miaob")
// 		console.log("新文件创建成功");
	
// }else{
// 	fs.appendFileSync(filename,"hello")
// 		console.log("新内容追加成功");
	
// }
var fs = require("fs");
// fs.readFile("js.js",function(err,data){
// 	if(err){
// 		console.log("文件读取失败")
// 	}else{
// 		console.log(data.toString())
// 	}
//})
//console.log(fs.readFileSync("js.js").toString());
// fs.unlink("js.js",function(err){
// 	if(err){
// 		console.log("删除失败")
// 	}else{
// 		console.log("删除成功")
// 	}
// })
// fs.appendFile("2.txt","miaov",function(err){
// 	if(err){
// 		console.log("添加失败");
// 	}else{
// 		console.log("添加成功");
// 	}
// })
// fs.rename("2.txt","3.txt",function(err){
// 	if(err){
// 		console.log("命名失败");
// 	}else{
// 		console.log("命名成功");
// 	}
// })
// var filename = '2.txt';
// fs.watch(filename,function(ev,fn){
// 	console.log(ev);
// 	if(fn){
// 		console.log(fn+"发生了改变");
// 	}else{
// 		console.log(fn+"没发生改变")
// 	}
// })
// fs.readdir('../node',function(err,fileList){
// 	fileList.forEach(function(f){
// 		fs.stat(f,function(err,info){

// 			switch(info.mode){
// 				case 16822:
// 					console.log("[文件夹]"+f)
// 				break;
// 				case 33206:
// 					console.log("[文件]"+f)
// 				break;
// 				default:
// 					console.log("[其他类型]"+f)
// 				break;
// 			}
// 		})
// 	})
// })
// var filedir = "./miaov";
// fs.watch(filedir,function(ev,file){
// 	//还要有一个文件发生变化，我们就需要对这个文件夹下的文件进行读取，人后进行合并
// 	fs.readdir(filedir,function(err,dataList){
// 		var arr = [];
// 		dataList.forEach(function(f){
// 			var info = fs.statSync(filedir+"/"+f);
// 			//console.log(info);
// 			if(info.mode == 33206){
// 				arr.push(filedir+"/"+f);
// 			}
// 		})

// 		//console.log(arr);
// 		var content = "";
// 		arr.forEach(function(f){
// 			var c = fs.readFileSync(f);
// 			//console.log(c);
// 			content += c.toString()+"\n";
// 		})
// 		//console.log(content)
		
// 	})
// })
fs.appendFileSync('./http.js');