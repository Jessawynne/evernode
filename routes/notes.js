'use strict'; 

const express = require('express');
const router = express.Router();

const noteCtrl = require('../controllers/note');
const Note = require('../models/note');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    //build query then execute
    .exec((err, note) => {
    if (err) throw err;

    req.note = note; 
    next();
  });
});

router.get('/notes', noteCtrl.index);

router.get('/notes/new', noteCtrl.new);

router.get('/notes/:id', noteCtrl.show);

router.get('/notes/:id/edit', noteCtrl.edit);

router.put('/notes/:id', noteCtrl.update);

router.delete('/notes/:id', noteCtrl.destroy);

router.post('/notes', noteCtrl.create);

module.exports = router;


