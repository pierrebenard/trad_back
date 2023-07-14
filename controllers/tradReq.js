const TradeRequest = require('../models/tradReq');
const User = require('../models/Users');
const bcrypt = require('bcrypt');


exports.saveTradeRequest = (req, res, next) => {
      const tradeRequest = new TradeRequest(req.body);
      tradeRequest.save()
        .then(() => res.status(201).json({ message: 'Données enregistrées avec succès' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

/*
exports.saveTradeRequest = (req, res, next) => {
  const { username, password } = req.body;

  // Vérifier l'authentification de l'utilisateur
  User.findOne({ username })
    .then(user => {
      if (!user || !comparePasswords(password, user.password)) {
        return res.status(401).json({ message: 'Authentification échouée' });
      }

      // Hacher le mot de passe
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Créer une nouvelle instance de TradeRequest à partir des données reçues
      const tradeRequest = new TradeRequest(req.body);
      tradeRequest.password = hashedPassword; // Assigner le mot de passe haché à l'objet tradeRequest

      // Enregistrer l'objet dans la base de données
      console.log(req.body);
      
      tradeRequest.save()
        .then(() => res.status(201).json({ message: 'Données enregistrées avec succès' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

function comparePasswords(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
*/
