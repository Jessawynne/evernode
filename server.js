'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const noteRoute = require('./routes/notes');
const app = express();
const port = process.env.PORT || 3000;

//all middlewares come before all routes
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  //how to you want to handle the extended character set
  extended: false
}));
app.use(methodOverride('_method'));

//creates a root route
app.get('/', (req, res) => {
  res.send('Server Running');
});
app.use(noteRoute);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});


