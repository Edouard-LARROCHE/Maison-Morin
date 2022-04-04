const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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

const User = mongoose.model('Login-user', loginSchema);

module.exports = { User };
//maison-morin
