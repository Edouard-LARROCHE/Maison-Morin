const express = require('express');
const login = express.Router();

const Login = require('../models/userModel');

login.get('/', (req, res) => {
  Login.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
});

login.get('/:id', (req, res, next) => {
  Login.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

login.put('/:id', (req, res, next) => {
  Login.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Nom et mot de passe modifié' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = login;
