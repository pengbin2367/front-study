const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('/public'));

app.get('/server', (req, res) => {
    res.send('Welcome to the Front Study!')
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000!');
});