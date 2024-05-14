const fs = require('fs');

const p = new Promise((resolve, reject) => {
    fs.readFile('./001-let.html', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
});

p.then(function(res) {
    console.log(res.toString());
}, function(err) {
    console.log(err);
});