const express = require('express');
const router = express.Router();

const Login = require('../models/loginModel');

router.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  Login.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'user already exist' });
    } else {
      const user = new Login({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: 'sucessfull' });
        }
      });
    }
  });
});

module.exports = router;
