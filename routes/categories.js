'use strict'; 

const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
const Category = require('../models/category');

router
  .get('/categories', categoryCtrl.index)
  .get('/categories/new', categoryCtrl.new)
  .post('/categories', categoryCtrl.create);

module.exports = router;
