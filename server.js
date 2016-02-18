'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Note = mongoose.model('Notes',  mongoose.Schema({
    title: String,
    text: String
}));

const app = express();
const port = process.env.PORT || 3000;

//all middlewares come before all routes
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  //how to you want to handle the extended character set
  extended: false
}));

//creates a root route
app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log(note);
    res.redirect('/');    
  });
});

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
