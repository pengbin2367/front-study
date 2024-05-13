const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// referer
app.use((req,res,next)=>{
    let referer = req.get('referer');
    if (referer) {
        let { hostname } = new URL(referer);
        if (hostname !== 'localhost') {
            res.status(404).send(`<h1>404 Not Found</h1>`);
            return ;
        }
    }
    next();
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send('Get user input');
})

app.use(express.static('../../03-Less/ShangYouXuan'));

function recordMiddleware(req, res, next){
    let { url, ip } = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
    next();
}

let checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next();
    } else {
        res.send('404 Not Found');
    }
}

app.use(recordMiddleware);

app.get('/home', checkCodeMiddleware, (req, res) => {
    res.send('Home');
});
app.get('/admin', (req, res) => {
    res.send(`Admin Home`);
})

app.listen(3000, () => {
    console.log('Express server listening on port 3000!');
});