const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const loginRoutes = require('./routes/userController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({ origin: 'https://localhost:3000/' }));
app.use('/posts', postsRoutes);
app.use('/login', loginRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
