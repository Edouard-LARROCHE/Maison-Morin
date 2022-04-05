const express = require('express');
const app = express();
require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || '5500';

const postsRoutes = require('./routes/loginRoute');
const loginRoutes = require('./routes/loginRoute');
const registerRoutes = require('./routes/registerRoute');
const userRoutes = require('./routes/userRoute');
// const uploadRoutes = require('./routes/uploadRoute');

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
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposeHeaders: ['sessionId'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  prefFlightContinue: false,
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('front/build'));

app.use('/posts', postsRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/user', userRoutes);
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
