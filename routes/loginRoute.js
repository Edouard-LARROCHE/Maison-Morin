const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { User } = require('../models/loginModel');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWTPRIVATEKEY, {
    expiresIn: maxAge,
  });
};

router.get('/', (req, res) => {
  User.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
});

router.get('/:id', (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
});

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: 'Adresse mail ou mot de passe invalide' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: 'Adresse mail ou mot de passe invalide' });

    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'lax', maxAge });
    res.status(200).send({ data: token, user: user._id, message: 'Connexion réussi' });
  } catch (error) {
    res.status(500).send({ message: 'Problème de connexion' });
  }
});

module.exports = router;
