var project = {
	"name" : "miaov",
	'fileData':[
		{
			'name':'css',
			'type':'dir'
		},
		{
			'name':'js',
			'type':'dir'
		},
		{
			'name':'index.html',
			'type':'file',
			'content':'<html>\n\t<head>\n\t\t<title>title</title>\n\t<head></head>\n\t<body>\n\t<h1>Hello</h1>\n\t</body>\n</html>',
		},
		{
			'name':'img',
			'type':'dir'
		}
	]
}
var fs = require('fs');
if(project.name){
	fs.mkdir(project.name);
	var fileData = project.fileData;
	if(fileData && fileData.forEach){
		fileData.forEach(function(item){
			item.path = project.name + '/' + item.name;
			item.content = item.content || "";
			switch(item.type){
				case "dir":
					fs.mkdirSync(item.path);
					break;
				case "file":
					fs.writeFileSync(item.path,item.content);
					break;
			}
		})
	}
}