const express = require('express');
const router = require('express').Router();
const app = express();
require('./config/db');

const multer = require('multer');
const upload = multer();

const postsRoutes = require('./routes/postsRoute');
const loginRoutes = require('./routes/userRoute');
const uploadRoutes = require('./routes/uploadRoute');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({ origin: 'https://localhost:3000/' }));

app.use('/posts', postsRoutes);
app.use('/login', loginRoutes);
router.post('/upload', upload.single('file'), uploadRoutes.uploadProfil);

app.listen(5500, () => console.log('Server started: 5500'));
