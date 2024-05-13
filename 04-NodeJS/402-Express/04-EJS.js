const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/home', (req, res) => {
    let title = 'Welcome to the Express Home';
    res.render('home', { title });
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

let isLogin = false;
let html = fs.readFileSync('./public/ejs.html').toString();
let result = ejs.render(html, {isLogin: isLogin});