const express = require('express');

const app = express();

app.listen('3000');

//middleware
app.use(express.json());

//route params
/*
 * localhost:3000
 * localhost:3000/var
 * localhost:3000/new_route/var
 */
app.route('/').get((req, res) => res.send('hello'));
app.route('/:var').get((req, res) => res.send(req.params.var));
app.route('/new_route/:var').get((req, res) => res.send(req.params.var));