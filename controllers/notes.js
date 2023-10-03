const Note = require('../models/note');

module.exports = {
    index,
    show,
    new: newNote,
    create
}

async function index(req, res) {
    const notes = await Note.find({});
    res.render('notes/index', { title: 'All Notes', notes });
}

async function show(req, res) {
    const note = await Note.findById(req.params.id).populate();
    res.render('notes/show', { title: 'All Notes', note })
}

function newNote(req, res) {
    res.render('notes/new', { title: 'Add New Note' });
}

async function create(req, res) {
    try {
        const { text } = req.body;
        const user = req.user;

        const note = await Note.create({ text, user });

        res.status(201).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
