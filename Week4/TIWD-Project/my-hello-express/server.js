var express = require('express');
var app = express();
var port = 3000;
//When request was sent before this block of code, with the localhost:3000 in the address bar of the browser but ends up in error b/c, instructions on how to handle tbe request are missing
app.get('/', function(request, response) {
	response.send('Hello, World!');
});

// using the Express listen function to command the server to start listening, passing in the port variable for the port number
app.listen(port, function() {
	console.log('Express app listening on port ' + port); // is to communicating to tell the server to start listening requests on the specified port
});
