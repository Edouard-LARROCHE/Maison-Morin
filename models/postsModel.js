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
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model('Posts', userSchema);
