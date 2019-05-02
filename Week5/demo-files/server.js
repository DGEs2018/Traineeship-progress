// create a variable to access the `http` module, helps this server handle requests and responses
/* let http = require('http');

// create a variable to store the port the port # on which the server will run on

let port = 2400;

// set up a function that will manage requests from clients,

let requestHandler = function(request, response) {
	console.log('New request to: ' + request.url);
	response.end('Hey all Ginettis !!!');
};
// create a server object
let server = http.createServer(requestHandler);
// tells the server to start listening to the server and execute the provided function
server.listen(port, function() {
	console.log('Listening on the port ' + port);
});
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 2020;

const server = http.createServer((req, res) => {
	console.log(req.headers);
	console.log('Request for ' + req.url + ' by method ');

	if (req.method == 'GET') {
		var fileUrl;
		if (req.url == '/') fileUrl = '/index.html';
		else fileUrl = req.url;

		var filePath = path.resolve('./public' + fileUrl);
		const fileExt = path.extname(filePath);
		if (fileExt == '.html') {
			fs.exists(filePath, (exists) => {
				if (!exists) {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/html');
					res.end('Error 404: ' + fileUrl);

					return;
				}
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end('Holá Ginettis!');
			});
		} else {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/html');
			res.end('Error 404: ' + fileUrl);
		}
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		res.end('Error 404: ' + req.method + ' not supported');
	}
});

server.listen(port, hostname, () => {
	console.log(`Server listening on http:\\${hostname}:${port}`);
});
