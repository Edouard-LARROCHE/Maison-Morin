const mongoose = require('mongoose');

const pictureViandeSchema = mongoose.Schema(
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
);

const pictureCakeSchema = mongoose.Schema(
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
    collection: 'pictureCake',
  },
);

module.exports = mongoose.model('PictureViande', pictureViandeSchema);
module.exports = mongoose.model('PictureCake', pictureCakeSchema);
