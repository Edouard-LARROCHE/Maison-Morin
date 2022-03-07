const express = require('express');
const pictureBlanc = express.Router();

const { VinBlanc } = require('../models/pictureModel');

pictureBlanc.get('/', (req, res) => {
  VinBlanc.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureBlanc.post('/', (req, res) => {
  const image = new VinBlanc({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureBlanc;
