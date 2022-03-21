const express = require('express');
const pictureSelection = express.Router();

const { Selection } = require('../models/pictureModel');

pictureSelection.get('/', (req, res) => {
  Selection.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

pictureSelection.put('/:id', (req, res, next) => {
  Selection.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

pictureSelection.delete('/:id', (req, res, next) => {
  Selection.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = pictureSelection;
