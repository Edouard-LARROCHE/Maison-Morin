const express = require('express');
const picture = express.Router();

const Picture = require('../models/pictureModel');

picture.get('/', (req, res) => {
  Picture.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = picture;
