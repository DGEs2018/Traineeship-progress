var express = require('express');
var app = express();
var port = 3000;

// localhost:3000/
//When request was sent before this block of code, with the localhost:3000 in the address bar of the browser but ends up in error b/c, instructions on how to handle tbe request are missing
app.get('/', function(request, response) {
	response.send('Hello, World!');
});

// what happens if I request localhost:3000/about-me  ?

// using the Express listen function to command the server to start listening, passing in the port variable for the port number
app.listen(port, function() {
	console.log('Express app listening on port ' + port); // is to communicating to tell the server to start listening requests on the specified port
});

/* What's just accomplished
- Express installed as a dependency for a Node.js project 
- HTTP server set up using Express
- A route created using an Express function that responds to an HTTP request
 */
