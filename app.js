const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect(
  'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.e9upc.mongodb.net/api-morin?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Mongodb connected');
    else console.log('Connection error :' + err);
  },
);

app.use(express.json());
app.use(cors({ origin: 'https://localhost:3000/' }));

app.use('/image', express.static(path.join(__dirname, 'image')));

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
