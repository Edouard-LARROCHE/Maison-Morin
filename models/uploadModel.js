const mongoose = require('mongoose');

const uploadShema = mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Upload', uploadShema);
