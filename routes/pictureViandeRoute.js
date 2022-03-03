const express = require('express');
const pictureViande = express.Router();

const PictureViande = require('../models/pictureViandeModel');

pictureViande.get('/', (req, res) => {
  PictureViande.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureViande.post('/', (req, res) => {
  const image = new PictureViande({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureViande;
