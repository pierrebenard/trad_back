const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

async function createCollection(username) {
  const uri = 'mongodb+srv://pierre:ztxiGZypi6BGDMSY@atlascluster.sbpp5xm.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('test');
    await database.createCollection(username);

    console.log('La collection a été créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création de la collection :', error);
  } finally {
    await client.close();
  }
}

exports.signup = (req, res, next) => {
  const username = req.body.username;

  createCollection(username);

  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { userId: user._id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
            });              
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getUser = (req, res, next) => {
    const userId = req.params.userId; // Récupérer l'ID de l'utilisateur depuis les paramètres de la requête
  
    User.findById(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
  
        // Renvoyer les informations de l'utilisateur
        res.status(200).json({ user });
      })
      .catch(error => res.status(500).json({ error }));
};