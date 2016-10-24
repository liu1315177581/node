var net = require('net');
var server = net.createServer(function(s){
	s.write('hello');
	s.end();
})
server.listen(8888);