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

module.exports = pictureProduitsExcep;
