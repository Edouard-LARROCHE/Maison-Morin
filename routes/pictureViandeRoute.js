const express = require('express');
const pictureViande = express.Router();

const { Viande } = require('../models/pictureModel');

pictureViande.get('/', (req, res) => {
  Viande.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureViande.post('/', (req, res) => {
  const image = new Viande({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureViande;
