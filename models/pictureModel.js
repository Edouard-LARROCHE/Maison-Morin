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
    desc: {
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
    desc: {
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
    desc: {
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
    desc: {
      type: String,
    },
  },
  {
    collection: 'picturePatisserie',
  },
);

const pictureMacaronsSchema = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  {
    collection: 'pictureMacarons',
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
    desc: {
      type: String,
    },
    winery: {
      type: String,
    },
    country: {
      type: String,
    },
    region: {
      type: String,
    },
    grapeVarieties: {
      type: String,
    },
    styleOfWine: {
      type: String,
    },
    alcoholContent: {
      type: Number,
    },
    price: {
      type: Number,
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
    desc: {
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
    desc: {
      type: String,
    },
  },
  {
    collection: 'pictureProduitsExcep',
  },
);

const pictureSelection = mongoose.Schema(
  {
    pictureUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  {
    collection: 'pictureSelection',
  },
);

const Viande = mongoose.model('Viande', pictureViandeSchema);
const Patisserie = mongoose.model('Cake', picturePatisseriesSchema);
const Macaron = mongoose.model('Macaron', pictureMacaronsSchema);
const Charcuterie = mongoose.model('Charcuterie', pictureCharcuterieSchema);
const Poisson = mongoose.model('Poisson', picturePoissonSchema);
const CaveVins = mongoose.model('CaveVins', pictureCaveVinsSchema);
const Cocktails = mongoose.model('Cocktails', pictureCocktailsSchema);
const ProduitsExcep = mongoose.model('ProduitsExcep', pictureProduitsExcepSchema);
const Selection = mongoose.model('Selection', pictureSelection);

module.exports = { Charcuterie, Viande, Patisserie, Macaron, Poisson, CaveVins, Cocktails, ProduitsExcep, Selection };
