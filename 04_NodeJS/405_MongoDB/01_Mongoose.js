const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.once('open', () => {
    let BookScheme = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });
    let BookModel = mongoose.model('books', BookScheme);
    
    BookModel.create({
        name: 'xiyouji',
        author: 'wuchengen',
        price: 19.9
    }).then((err, book) => {
        if (err) {
            console.log(err);
            return ;
        }
        console.log(book);
    });
});
mongoose.connection.on('error', (err) => {
    console.log('MongoDB Connection Error:', err);
})
mongoose.connection.on('close', () => {
    console.log('MongoDB Connection Closed')
})