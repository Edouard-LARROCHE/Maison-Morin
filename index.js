const express = require('express');
const app = express();
require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || '5500';

const adminRoutes = require('./routes/adminRoute');
// const uploadRoutes = require('./routes/uploadRoute');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const userRoutes = require('./routes/user.routes');

const pictureViandeRoutes = require('./routes/pictureViandeRoute');
const picturePoissonRoutes = require('./routes/picturePoissonRoute');
const pictureCharcuterieRoutes = require('./routes/pictureCharcuterieRoute');
const picturePatisserieRoutes = require('./routes/picturePatisserieRoute');
const pictureMacaronRoutes = require('./routes/pictureMacaronRoute');
const pictureCaveVinsRoutes = require('./routes/pictureCaveVinsRoute');
const pictureCocktailsRoutes = require('./routes/pictureCocktailsRoute');
const pictureProduitsExcepRoutes = require('./routes/pictureProduitsExcepRoute');
const pictureSelectionRoutes = require('./routes/pictureSelectionRoute');

const corsOption = {
  origin: process.env.MAISON_MORIN_APP,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposeHeaders: ['sessionId'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  prefFlightContinue: false,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('front/build'));

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// routes
app.use('/api/user', userRoutes);
app.use('/admin', adminRoutes);
//app.use('/upload', uploadRoutes);
app.use('/picture/traiteur/viande', pictureViandeRoutes);
app.use('/picture/traiteur/poisson', picturePoissonRoutes);
app.use('/picture/traiteur/charcuterie', pictureCharcuterieRoutes);
app.use('/picture/patisserie/patisseries', picturePatisserieRoutes);
app.use('/picture/patisserie/macaron', pictureMacaronRoutes);
app.use('/picture/cave/vins', pictureCaveVinsRoutes);
app.use('/picture/cocktails', pictureCocktailsRoutes);
app.use('/picture/produitsExcep', pictureProduitsExcepRoutes);
app.use('/picture/selection', pictureSelectionRoutes);

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './front/build/index.html'));
});

app.listen(PORT, () => console.log(`Server started: ${PORT}`));
