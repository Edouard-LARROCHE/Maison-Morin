const express = require('express');
const pictureVinRouge = express.Router();

const { VinRouge } = require('../models/pictureModel');

pictureVinRouge.get('/', (req, res) => {
  VinRouge.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureVinRouge.post('/', (req, res) => {
  const image = new VinRouge({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureVinRouge;
