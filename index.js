const express = require('express');
const app = express();
require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRoutes = require('./routes/postsRoute');
const loginRoutes = require('./routes/userRoute');
const uploadRoutes = require('./routes/uploadRoute');

const pictureViandeRoutes = require('./routes/pictureViandeRoute');
const picturePoissonRoutes = require('./routes/picturePoissonRoute');
const pictureCharcuterieRoutes = require('./routes/pictureCharcuterieRoute');
const picturePatisserieRoutes = require('./routes/picturePatisserieRoute');
const pictureCaveVinsRoutes = require('./routes/pictureCaveVinsRoute');
const pictureCocktailsRoutes = require('./routes/pictureCocktailsRoute');
const pictureProduitsExcepRoutes = require('./routes/pictureProduitsExcepRoute');

const corsOption = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposeHeaders: ['sessionId'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  prefFlightContinue: false,
};

app.use(cors(corsOption));
app.use(bodyParser.json());

app.use('/posts', postsRoutes);
app.use('/login', loginRoutes);
app.use('/upload', uploadRoutes);

app.use('/picture/traiteur/viande', pictureViandeRoutes);
app.use('/picture/traiteur/poisson', picturePoissonRoutes);
app.use('/picture/traiteur/charcuterie', pictureCharcuterieRoutes);
app.use('/picture/patisserie/patisseries', picturePatisserieRoutes);
app.use('/picture/cave/vins', pictureCaveVinsRoutes);
app.use('/picture/cocktails', pictureCocktailsRoutes);
app.use('/picture/produitsExcep', pictureProduitsExcepRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
