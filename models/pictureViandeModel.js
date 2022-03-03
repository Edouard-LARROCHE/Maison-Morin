const mongoose = require('mongoose');

const pictureViandeSchema = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'pictureViande',
  },
);

module.exports = mongoose.model('Picture', pictureViandeSchema);
