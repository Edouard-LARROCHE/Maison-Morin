const express = require('express');
const pictureFruit = express.Router();

const { Fruit } = require('../models/pictureModel');

pictureFruit.get('/', (req, res) => {
  Fruit.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureFruit.post('/', (req, res) => {
  const image = new Fruit({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureFruit;
