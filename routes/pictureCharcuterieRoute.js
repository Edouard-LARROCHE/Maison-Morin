const express = require('express');
const pictureCharcuterie = express.Router();

const { Charcuterie } = require('../models/pictureModel');

pictureCharcuterie.get('/', (req, res) => {
  Charcuterie.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureCharcuterie.post('/', (req, res) => {
  const image = new Charcuterie({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureCharcuterie.delete('/:id', (req, res, next) => {
  Charcuterie.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureCharcuterie;
