const express = require('express');
const router = express.Router();

const noteCtrl = require('../controllers/note');

router.get('/notes', noteCtrl.index);

router.get('/notes/new', noteCtrl.newNote);

router.get('/notes/:id', noteCtrl.show);

router.get('/notes/:id/edit', noteCtrl.edit);

router.put('/notes/:id', noteCtrl.update);

router.delete('/notes/:id', noteCtrl.destroy);

router.post('/notes', noteCtrl.create);

module.exports = router;


