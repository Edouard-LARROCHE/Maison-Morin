const express = require('express');
const pictureCaveVins = express.Router();

const { CaveVins } = require('../models/pictureModel');

pictureCaveVins.get('/', (req, res) => {
  CaveVins.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureCaveVins.get('/:id', (req, res, next) => {
  CaveVins.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

pictureCaveVins.post('/', (req, res) => {
  const image = new CaveVins({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureCaveVins.put('/:id', (req, res, next) => {
  CaveVins.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureCaveVins.delete('/:id', (req, res, next) => {
  CaveVins.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureCaveVins;
