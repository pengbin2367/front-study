const express = require('express');
const { singers } = require('./singers.json');

const app = express();

app.get('/singer/:id.html', (req, res) => {
    let { id } = req.params;
    let result = singers.find(item => item.id === Number(id));
    
    if (!result) {
        res.status(404).end(`<h1>404 Not Found</h1>`);
        return ;
    }
    
    res.end(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>02_RouterParam</title>
                    </head>
                    <body>
                        <h2>${ result.singer_name }</h2>
                        <img src="${ result.singer_pic }" alt="${ result.singer_name }">
                    </body>
                    </html>
    `);
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000!');
});