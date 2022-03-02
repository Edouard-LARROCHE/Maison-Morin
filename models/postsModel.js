const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'posts',
  },
);

module.exports = mongoose.model('Posts', postsSchema);
