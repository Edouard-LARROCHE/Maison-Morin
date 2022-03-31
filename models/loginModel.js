const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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

loginSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: '7d',
  });
  return token;
};

const validate = (data) => {
  const schema = object({
    firstName: string().required().label('First Name'),
    lastName: string().required().label('Last Name'),
    email: string().email().required().label('Email'),
    password: required().label('Password'),
  });
  return schema.validate(data);
};

const User = mongoose.model('Login-user', loginSchema);

module.exports = { User, validate };
