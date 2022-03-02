const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();
const DIR = './front/public/upload/';

const Img = require('../models/uploadModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router.post('/', upload.single('profileImg'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host') + '/';
  const img = new Img({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    uploadImg: url + req.file.filename,
  });
  img
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Image bien enregistrée',
        uploadCreated: {
          _id: result._id,
          uploadImg: result.uploadImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

router.get('/', (req, res, next) => {
  Img.find().then((data) => {
    res.status(200).json({
      message: 'Liste complete:',
      img: data,
    });
  });
});

module.exports = router;
