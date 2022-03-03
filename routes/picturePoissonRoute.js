const express = require('express');
const picturePoisson = express.Router();

const PicturePoisson = require('../models/pictureModel');

picturePoisson.get('/', (req, res) => {
  PicturePoisson.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

picturePoisson.post('/', (req, res) => {
  const image = new PicturePoisson({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = picturePoisson;
