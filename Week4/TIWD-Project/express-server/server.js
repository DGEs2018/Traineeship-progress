const express = require('express');
const app = express();
const port = 4400;

const authors = [ 'Sidney Sheldon', 'Agatha Christie', 'Johann von Göthe', 'Robert Ludlum' ];

app.get('/', (req, res) => {
	res.send(authors);
});

app.get('/authors/:writingId', (req, res) => {
	res.send(authors[req.params.writingId - 1]);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
