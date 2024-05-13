// 1. import express
const express = require('express');
// 2. create application object
const app = express();

// 3. create router
app.get('/home', (req, res) => {
    res.end('Welcome to the Express Home');
});
app.get('/', (req, res) => {
    res.end('Welcome to the Express');
});
// 4. listen port and start server
app.listen(3000, () => {
    console.log('Express server listening on port 3000!');
});