const fs = require('fs');

const p = new Promise((resolve, reject) => {
    fs.readFile('./01-let.html', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./03-iterable.html', (err, data) => {
            if (err) reject(err);
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./04-generator.html', (err, data) => {
            if (err) reject(err);
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    console.log(value.toString());
})