var http = require('http');

http
	.createServer(function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello Ginettis!');
	})
	.listen(2019, '127.0.0.1');
