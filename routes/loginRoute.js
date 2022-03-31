const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User } = require('../models/loginModel');

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: 'Adresse mail ou mot de passe invalide' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: 'Adresse mail ou mot de passe invalide' });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: 'Connexion réussi' });
  } catch (error) {
    res.status(500).send({ message: 'Problème de connexion' });
  }
});

module.exports = router;
