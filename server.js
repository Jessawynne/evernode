'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const Note = require('./models/note');

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

//routing order MATTERS when using a routing param aka :id
app.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {note: note});
  });
});

app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;

    res.redirect(`/notes/${note._id}`);
  });
});

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});


