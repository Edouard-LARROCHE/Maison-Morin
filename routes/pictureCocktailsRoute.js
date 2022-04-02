const express = require('express');
const pictureCocktails = express.Router();

const { Cocktails } = require('../models/pictureModel');

pictureCocktails.get('/', (req, res) => {
  Cocktails.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureCocktails.get('/:id', (req, res, next) => {
  Cocktails.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

pictureCocktails.post('/', (req, res) => {
  const image = new Cocktails({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureCocktails.put('/:id', (req, res, next) => {
  Cocktails.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureCocktails.delete('/:id', (req, res, next) => {
  Cocktails.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureCocktails;
