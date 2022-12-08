'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (requets, response) => {
    response.send('<h1>My First AWS Node!');
});

app.get('/secret', (requets, response) => {
    response.send('<h1>My Secret Page!');
});

app.listen(PORT, () => {
    console.log('App is listening on port :: ' + PORT);
});