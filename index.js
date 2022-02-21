const express = require('express');
const app = express();
require('./config/db');

const bodyParser = require('body-parser');
const cors = require('cors');

const postsRoutes = require('./routes/postsRoute');
const loginRoutes = require('./routes/userRoute');
const uploadRoutes = require('./routes/uploadRoute');

app.use(bodyParser.json());
app.use(cors({ origin: 'https://localhost:3000/' }));

app.use('/posts', postsRoutes);
app.use('/login', loginRoutes);

app.use('/upload', uploadRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
