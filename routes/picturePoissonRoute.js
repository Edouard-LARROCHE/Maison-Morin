const express = require('express');
const picturePoisson = express.Router();

const { Poisson } = require('../models/pictureModel');

picturePoisson.get('/', (req, res) => {
  Poisson.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
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

module.exports = picturePoisson;
