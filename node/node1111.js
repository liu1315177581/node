process.stdin.resume();
process.stdout.write("请输入")
process.stdin.on("data",function(chunk){
	console.log("输入了"+chunk);
})