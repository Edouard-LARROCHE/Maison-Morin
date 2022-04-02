const express = require('express');
const pictureMacaron = express.Router();

const { Macaron } = require('../models/pictureModel');

pictureMacaron.get('/', (req, res) => {
  Macaron.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureMacaron.get('/:id', (req, res, next) => {
  Macaron.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

pictureMacaron.post('/', (req, res) => {
  const image = new Macaron({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureMacaron.put('/:id', (req, res, next) => {
  Macaron.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureMacaron.delete('/:id', (req, res, next) => {
  Macaron.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureMacaron;
