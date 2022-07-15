const express = require('express');

const app = express();

app.listen('3000');

//middleware
app.use(express.json());

// body params 
/* uses insomnia
 {
	"name": "Fábio Dantas",
	"city": "São Paulo",
	"favorite_books": [
		"Clean Architecture",
		"Clean code",
		"Design Patterns"
	]
 }
 */

app.route('/').post((req, res) => {
    const {name, city, favorite_books} = req.body;
    res.send(`I am ${name} and I live in ${city} and my favorite books are: ${favorite_books}.`);
});