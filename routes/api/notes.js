const express = require('express');
const router = express.Router();

const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', notesCtrl.index);
router.get('/:id', ensureLoggedIn, notesCtrl.show);

module.exports = router;
