const { UserModel } = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWTPRIVATEKEY, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await UserModel.create({ firstName, lastName, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge, sameSite: 'Lax', secure: true });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};
