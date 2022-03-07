const express = require('express');
const pictureCake = express.Router();

const { Cake } = require('../models/pictureModel');

pictureCake.get('/', (req, res) => {
  Cake.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureCake.post('/', (req, res) => {
  const image = new Cake({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureCake;
