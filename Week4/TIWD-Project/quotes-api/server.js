var express = require('express');
var app = express();
var port = 3600;

app.get('/quotes', function(req, res) {
	console.log("Get a list of all quotes as json";
	res.json(quotes) ;

	if (req.query.year) {
		res.send('Return a list of quotes from the year: ' + req.query.year);
	} else {
		res.json(quotes);
	}
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});

var quotes = [
	{
		id: 1,
		quote: 'The best is yet to come',
		author: 'Unknown',
		year: 2000
	},

	{
		id: 2,
		quote: 'This is a quote',
		author: 'First Last',
		year: 1930
	},

	{
		id: 3,
		quote: 'This is another quote',
		author: 'Unknown',
		year: 2000
	}
];
