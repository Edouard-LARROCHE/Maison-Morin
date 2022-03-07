const express = require('express');
const pictureBulles = express.Router();

const { Bulles } = require('../models/pictureModel');

pictureBulles.get('/', (req, res) => {
  Bulles.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureBulles.post('/', (req, res) => {
  const image = new Bulles({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureBulles;
