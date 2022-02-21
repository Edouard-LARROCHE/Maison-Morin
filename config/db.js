const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.e9upc.mongodb.net/api-morin?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Mongodb connected');
    else console.log('Connection error :' + err);
  },
);
