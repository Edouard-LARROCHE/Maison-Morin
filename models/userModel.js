const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: './uploads/profil/random-user.png',
  },
});

module.exports = mongoose.model('Login', loginSchema);
