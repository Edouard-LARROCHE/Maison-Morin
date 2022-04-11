const express = require('express');
const admin = express.Router();

const Admin = require('../models/adminModel');

admin.get('/', (req, res) => {
  Admin.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
});

admin.get('/:id', (req, res, next) => {
  Admin.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

admin.put('/:id', (req, res, next) => {
  Admin.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Nom et mot de passe modifié' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = admin;
