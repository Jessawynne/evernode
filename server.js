'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

//creates a root route
app.get('/', (req, res) => {
  res.send('Server Running');
});

app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});