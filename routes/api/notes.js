const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesCtrl.show);
router.post('/', ensureLoggedIn, notesCtrl.create);

module.exports = router;
