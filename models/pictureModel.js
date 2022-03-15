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

const picturePoissonSchema = mongoose.Schema(
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
    collection: 'picturePoisson',
  },
);

const pictureCharcuterieSchema = mongoose.Schema(
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
    collection: 'pictureCharcuterie',
  },
);

const picturePatisseriesSchema = mongoose.Schema(
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
    collection: 'picturePatisserie',
  },
);

const pictureRougeSchema = mongoose.Schema(
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
    collection: 'pictureVinRouge',
  },
);

const pictureBlancSchema = mongoose.Schema(
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
    collection: 'pictureVinBlanc',
  },
);

const pictureRoseSchema = mongoose.Schema(
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
    collection: 'pictureVinRose',
  },
);

const pictureBullesSchema = mongoose.Schema(
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
    collection: 'pictureBulles',
  },
);

const Viande = mongoose.model('Viande', pictureViandeSchema);
const Patisserie = mongoose.model('Cake', picturePatisseriesSchema);
const Charcuterie = mongoose.model('Charcuterie', pictureCharcuterieSchema);
const Poisson = mongoose.model('Poisson', picturePoissonSchema);
const VinRouge = mongoose.model('VinRouge', pictureRougeSchema);
const VinBlanc = mongoose.model('VinBlanc', pictureBlancSchema);
const VinRose = mongoose.model('VinRose', pictureRoseSchema);
const Bulles = mongoose.model('Bulles', pictureBullesSchema);

module.exports = { Charcuterie, Viande, Patisserie, Poisson, VinRouge, VinBlanc, VinRose, Bulles };
