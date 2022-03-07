const express = require('express');
const pictureRose = express.Router();

const { VinRose } = require('../models/pictureModel');

pictureRose.get('/', (req, res) => {
  VinRose.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureRose.post('/', (req, res) => {
  const image = new VinRose({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureRose;
