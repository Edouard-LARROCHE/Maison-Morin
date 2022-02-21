const express = require('express');
const login = express.Router();

const Login = require('../models/userModel');

login.get('/', (req, res) => {
  Login.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = login;
