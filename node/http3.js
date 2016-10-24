

var filename = "./33333";
callback(filename);
function callback(filename){
	var fs = require('fs');
	fs.readdir(filename,function(err,list){
		if(list && list.forEach){
			list.forEach(function(item,index){
				var aaaa = filename+'/'+item;
				fs.stat(aaaa,function(err,info){
					//console.log(info.mode);
					if(info.mode == 16822){
						callback(aaaa);
						setTimeout(function(){
							fs.rmdir(aaaa);
						},200)
						
					}else {
						fs.unlink(aaaa,function(){
							console.log(1);
						});
					}
				})
			})
		}
	})
}
	

