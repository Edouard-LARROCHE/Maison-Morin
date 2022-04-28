const { UserModel } = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  UserModel.findOne({ _id: req.params.id }, (err, docs) => {
    if (!err) res.send(docs);
    else console.log('ID unknown : ' + err);
  });
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          shopCart: req.body.shopCart,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
