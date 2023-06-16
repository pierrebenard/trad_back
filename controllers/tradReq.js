const TradeRequest = require('../models/tradReq');
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.saveTradeRequest = (req, res, next) => {
  const { login, password } = req.body;

  // Vérifier l'authentification de l'utilisateur
  User.findOne({ login }) // Rechercher un utilisateur avec le même login
    .then(user => {
      if (!user || !comparePasswords(password, user.password)) {
        return res.status(401).json({ message: 'Authentification échouée' });
      }

      // Créer une nouvelle instance de TradeRequest à partir des données reçues
      const tradeRequest = new TradeRequest(req.body);

      // Enregistrer l'objet dans la base de données
      tradeRequest.save()
        .then(() => res.status(201).json({ message: 'Données enregistrées avec succès' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

function comparePasswords(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
