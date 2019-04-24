/* /* const http = require('http');

const server = http.createServer(function (request, response) {
  response.write('hello world');
  response.end();
});

server.listen(8080, function() {
  console.log('Server listening on http://localhost:8080...');
}); */

// Add routes

const http = require('http');

const authors = [ 'John Grisham', 'Sydney Sheldon', 'Agatha Christie', 'Nora Roberts' ];

const server = http.createServer(function(request, response) {
	if (request.url === '/') {
		response.write('hello world');
		response.end();
	} else if (request.url === '/writers') {
		response.write(authors.toString(', '));
		response.end();
    } else (request.url === 'request.url.split('/')) {
        response.write(authors.toString)
    }
    
});

server.listen(8080, function() {
	console.log('Server listening on http://localhost:8080...');
});

// List writers

// const authors = ['John Grisham', 'Sydney Sheldon', 'Agatha Christie', 'Nora Roberts'];

// const authorsInString = authors.split('').join(', ');
// console.log(authorsInString);

/* One writer

const authors = ['John Grisham', 'Sydney Sheldon', 'Agatha Christie', 'Nora Roberts'];

const authorsInString = authors.split('').toString.join(', ');



http://localhost:8080/writers/1
 */
