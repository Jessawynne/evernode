'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const logger = require('./lib/logger');

const noteRoutes = require('./routes/notes');
const categoryRoutes = require('./routes/categories');

const app = express();
const port = process.env.PORT || 3000;

//all middlewares come before all routes
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  //how to you want to handle the extended character set
  extended: false
}));
app.use(methodOverride('_method'));
app.use(logger);

//creates a root route
app.get('/', (req, res) => {
  res.send('Server Running');
});
//routes
app.use(noteRoutes);
app.use(categoryRoutes);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});


