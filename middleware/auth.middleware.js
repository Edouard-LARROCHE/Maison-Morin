const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTPRIVATEKEY, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTPRIVATEKEY, async (err) => {
      if (err) {
        console.log(err);
        res.send(200).json('No token');
      } else {
        next();
      }
    });
  }
};
