const express = require('express');
const router = express.Router();
const { uploadErrors } = require('../utils/errors-utils');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

const Image = require('../models/uploadModel');

router.post('/', async (req, res) => {
  try {
    if (req.file.detectedFileExtension != '.jpg') throw Error('invalid file');

    if (req.file.size > 500000) throw Error('max size');
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }

  const fileName = req.body.name + '.jpg';

  await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}/../front/public/assets/${fileName}`));

  //   try {
  //     await uploadModel.findByIdAndUpdate(
  //       req.body.userId,
  //       { $set: { picture: './upload/' + fileName } },
  //       { new: true, upsert: true, setDefaultsOnInsert: true },
  //       (err, docs) => {
  //         if (!err) return res.send(docs);
  //         else return res.status(500).send({ message: err });
  //       },
  //     );
  //   } catch (err) {
  //     return res.status(500).send({ message: err });
  //   }
});

module.exports = router;
