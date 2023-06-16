const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/user');
const tradReqRoutes = require('./routes/tradReq');
const searchDataRoutes = require('./routes/searchData');

mongoose.connect('mongodb+srv://pierre:ztxiGZypi6BGDMSY@atlascluster.sbpp5xm.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

// Configure CORS
app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Intégration du système de mot de passe sécurisé uniquement pour /api/tradReq
const securePassword = process.env.SECURE_PASSWORD || 'supersecret';

app.use('/api/tradReq', (req, res, next) => {
  const { password } = req.body;

  if (password !== securePassword) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  next();
}, tradReqRoutes);

app.use('/api/searchData', searchDataRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
