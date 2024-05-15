const fs = require('fs');

function readF1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./01-async.html', (err, file) => {
            if (err) reject('Error while reading files');
            resolve(file);
        })
    })
}

function readF2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./02-await.html', (err, file) => {
            if (err) reject('Error while reading files');
            resolve(file);
        })
    })
}

async function readF() {
    let f1 = await readF1();
    let f2 = await readF2();
    console.log(f1.toString());
    console.log(f2.toString());
}

readF();