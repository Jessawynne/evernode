'use strict'; 

const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
const Category = require('../models/category');
const Note = require('../models/note');

router.param('id', (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) throw err;

    req.category = category;
    //Find notes with categories that match ID
    Note.find({category: id}, (err, notes) => {
      if (err) throw err;

      req.category.notes = notes;
      next();   
    });
  });
});

router
  .get('/categories', categoryCtrl.index)
  .get('/categories/new', categoryCtrl.new)
  .post('/categories', categoryCtrl.create)
  .get('/categories/:id', categoryCtrl.show);

module.exports = router;
