const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'picture',
  },
);

module.exports = mongoose.model('Picture', pictureSchema);
