const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const uuid = require('uuid');
const router = express.Router();
const DIR = './front/public/upload/';

const User = require('../models/userModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuid + '-' + fileName);
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
  const url = req.protocol + '://' + req.get('host');
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    profileImg: url + req.file.filename,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Image bien enregistrée',
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
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
  User.find().then((data) => {
    res.status(200).json({
      message: 'Liste complete',
      users: data,
    });
  });
});

module.exports = router;
