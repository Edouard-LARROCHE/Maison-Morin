const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    uploadImg: {
      type: String,
    },
  },
  {
    collection: 'img',
  },
);
module.exports = mongoose.model('Img', userSchema);
