const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'login-user',
  },
);

module.exports = mongoose.model('Login-user', loginSchema);
