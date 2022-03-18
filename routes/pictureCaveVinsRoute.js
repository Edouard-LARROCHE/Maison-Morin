const express = require('express');
const pictureCaveVins = express.Router();

const { CaveVins } = require('../models/pictureModel');

pictureCaveVins.get('/', (req, res) => {
    CaveVins.find()
        .then((picture) => res.status(200).json(picture))
        .catch((error) => res.status(400).json({ error }));
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

module.exports = pictureCaveVins;