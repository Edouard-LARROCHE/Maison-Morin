const express = require('express');
const picturePoisson = express.Router();

const { Poisson } = require('../models/pictureModel');

picturePoisson.get('/', (req, res) => {
  Poisson.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

picturePoisson.get('/:id', (req, res, next) => {
  Poisson.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

picturePoisson.post('/', (req, res) => {
  const image = new Poisson({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

picturePoisson.put('/:id', (req, res, next) => {
  Poisson.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

picturePoisson.delete('/:id', (req, res, next) => {
  Poisson.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = picturePoisson;
