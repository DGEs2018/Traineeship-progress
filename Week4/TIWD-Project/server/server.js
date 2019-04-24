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

const individualAuthors = authors.join(', ');

const server = http.createServer(function(request, response) {
	console.log(request.url);
	const list = request.url.split('/');
	console.log(list[1]);

	if (request.url === '/') {
		response.write('hello world');
		response.end();
	} else if (request.url === '/writers') {
		response.write(individualAuthors);
		response.end();
	} else if (list.length > 2) {
		let position = list[2] - 1;
		response.write(authors[position]);
		response.end();
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
