const express = require('express');
const router = express.Router();

const noteCtrl = require('../controllers/note');

router.get('/notes/new', noteCtrl.newNote);

router.get('/notes/:id', noteCtrl.show);

router.post('/notes', noteCtrl.create);

module.exports = router;