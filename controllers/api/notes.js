const Note = require('../../models/note');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const notes = await Note.find({});
    res.render('notes/index', { title: 'All Notes', notes });
}

async function show(req, res) {
    const note = await Note.findById(req.params.id).populate();
    res.render('notes/show', { title: 'All Notes', note })
}
