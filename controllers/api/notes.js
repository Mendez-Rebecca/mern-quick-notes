const Note = require('../../models/note');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const notes = await Note.find({});
    res.json(notes)
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const notes = await Note.create(req.body);
        res.json(notes);
    } catch (err) {
        res.status(400).json(err)
    }
}
