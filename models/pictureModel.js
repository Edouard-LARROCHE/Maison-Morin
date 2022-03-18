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

const pictureCaveVinsSchema = mongoose.Schema(
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
    collection: 'pictureCaveVins',
  },
);


const pictureCocktailsSchema = mongoose.Schema(
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
    collection: 'pictureCocktails',
  },
);

const pictureProduitsExcepSchema = mongoose.Schema(
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
    collection: 'pictureProduitsExcep',
  },
);

const Viande = mongoose.model('Viande', pictureViandeSchema);
const Patisserie = mongoose.model('Cake', picturePatisseriesSchema);
const Charcuterie = mongoose.model('Charcuterie', pictureCharcuterieSchema);
const Poisson = mongoose.model('Poisson', picturePoissonSchema);
const CaveVins = mongoose.model('CaveVins', pictureCaveVinsSchema);
const Cocktails = mongoose.model('Cocktails', pictureCocktailsSchema);
const ProduitsExcep = mongoose.model('ProduitsExcep', pictureProduitsExcepSchema);

module.exports = { Charcuterie, Viande, Patisserie, Poisson, CaveVins, Cocktails, ProduitsExcep };
