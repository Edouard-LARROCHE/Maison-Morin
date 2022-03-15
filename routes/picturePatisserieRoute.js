const express = require('express');
const picturePatisserie = express.Router();

const { Patisserie } = require('../models/pictureModel');

picturePatisserie.get('/', (req, res) => {
  Patisserie.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

picturePatisserie.post('/', (req, res) => {
  const image = new Patisserie({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = picturePatisserie;
