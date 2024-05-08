let express = require('express');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../db.json')
const shortid = require('shortid')

let router = express.Router();
const db = low(adapter)

router.get('/', (req, res) => {
    let accounts = db.get('accounts').value();
    res.render('list', { accounts: accounts });
})
router.get('/create', (req, res) => {
    res.render('create');
})
router.post('/create', (req, res) => {
    db.get('accounts').unshift({ id: shortid.generate(), ...req.body }).write();
    res.render('success', { msg: 'Successfully created.', url: '/accounts' });
})
router.get('/:id', (req, res) => {
    db.get('accounts').remove({ id: req.params.id}).write();
    res.render('success', { msg: 'Successfully created.', url: '/accounts' });
})

module.exports = router;