const express = require('express');
const router = express.Router();

const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', notesCtrl.index);
router.get('/new', ensureLoggedIn, notesCtrl.new);
router.get('/:id', ensureLoggedIn, notesCtrl.show);
router.post('/', ensureLoggedIn, notesCtrl.create);

module.exports = router;
