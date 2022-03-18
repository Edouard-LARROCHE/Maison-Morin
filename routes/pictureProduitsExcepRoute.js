const express = require('express');
const pictureProduitsExcep = express.Router();

const { ProduitsExcep } = require('../models/pictureModel');

pictureProduitsExcep.get('/', (req, res) => {
  ProduitsExcep.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureProduitsExcep.post('/', (req, res) => {
  const image = new ProduitsExcep({
    ...req.body,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: 'Image enregistrée' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureProduitsExcep.put('/:id', (req, res, next) => {
  ProduitsExcep.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureProduitsExcep.delete('/:id', (req, res, next) => {
  ProduitsExcep.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureProduitsExcep;
