const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Posts', userSchema);