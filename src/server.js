'use strict';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-le6dz.mongodb.net/week09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port);
console.log(`application running on port ${port}`);