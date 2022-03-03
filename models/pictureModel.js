const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
  },
  {
    collection: 'pictureViande',
  },
  {
    collection: 'picturePoisson',
  },
  {
    collection: 'pictureCake',
  },
  {
    collection: 'pictureFruit',
  },
);

module.exports = mongoose.model('Picture', pictureSchema);
