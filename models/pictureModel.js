const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'pictureViande',
    collection: 'picturePoisson',
    collection: 'pictureCake',
    collection: 'pictureFruit',
  },
);

module.exports = mongoose.model('Picture', pictureSchema);
