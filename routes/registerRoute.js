const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User } = require('../models/loginModel');

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(409).send({ message: 'Adresse mail déjà existante. Veuillez en saisir une nouvelle.' });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;