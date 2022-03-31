const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User } = require('../models/loginModel');

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: 'Invalid Email or Password' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: 'Invalid Email or Password' });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: 'logged in successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
