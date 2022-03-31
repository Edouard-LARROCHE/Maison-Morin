const express = require('express');
const router = express.Router();

const Login = require('../models/loginModel');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  Login.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'login sucess', user: user });
      } else {
        res.send({ message: 'wrong credentials' });
      }
    } else {
      res.send('not register');
    }
  });
});

module.exports = router;
