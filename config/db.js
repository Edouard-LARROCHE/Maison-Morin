const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  'mongodb+srv://Ed94Ed94@cluster0.e9upc.mongodb.net/api-morin?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Mongodb connected');
    else console.log('Connection error :' + err);
  },
);
