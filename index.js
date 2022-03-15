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
const pictureCakeRoutes = require('./routes/pictureCakeRoute');
const pictureVinRougeRoutes = require('./routes/pictureVinRougeRoute');
const pictureVinBlancRoutes = require('./routes/pictureVinBlancRoute');
const pictureVinRoseRoutes = require('./routes/pictureVinRoseRoute');
const pictureBullesRoutes = require('./routes/pictureBullesRoute');

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
app.use('/picture/patisserie/cake', pictureCakeRoutes);
app.use('/picture/cave/rouge', pictureVinRougeRoutes);
app.use('/picture/cave/blanc', pictureVinBlancRoutes);
app.use('/picture/cave/rose', pictureVinRoseRoutes);
app.use('/picture/cave/bulles', pictureBullesRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
