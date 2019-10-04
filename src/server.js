'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json({ mesage: 'Hello World' });
});

app.listen(port);
console.log(`application running on port ${port}`);