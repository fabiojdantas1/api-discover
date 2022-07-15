const express = require('express');

const app = express();

app.listen('3000');

//middleware
app.use(express.json());

//route params
/*
 * localhost:3000?name=fabio
 * localhost:3000/new_route/user?name=fabio&city=São Paulo
 */
app.route('/').get((req, res) => res.send(req.query.name));

app.route('/new_route/user').get((req, res) => res.send(req.query));