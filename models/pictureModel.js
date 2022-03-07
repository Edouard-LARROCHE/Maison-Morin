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

const pictureFruitSchema = mongoose.Schema(
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
    collection: 'pictureFruit',
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
const Cake = mongoose.model('Cake', pictureCakeSchema);
const Poisson = mongoose.model('Poisson', picturePoissonSchema);
const Fruit = mongoose.model('Fruit', pictureFruitSchema);
const VinRouge = mongoose.model('VinRouge', pictureRougeSchema);
const VinBlanc = mongoose.model('VinBlanc', pictureBlancSchema);
const VinRose = mongoose.model('VinRose', pictureRoseSchema);
const Bulles = mongoose.model('Bulles', pictureBullesSchema);

module.exports = { Viande, Cake, Poisson, Fruit, VinRouge, VinBlanc, VinRose, Bulles };
