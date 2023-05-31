const TradeRequest = require('../models/tradReq');

exports.saveTradeRequest = (req, res, next) => {
  const tradeRequestData = req.body;

  // Créez une nouvelle instance de TradeRequest à partir des données reçues
  const tradeRequest = new TradeRequest(tradeRequestData);

  // Enregistrez l'objet dans la base de données
  tradeRequest.save()
    .then(() => res.status(201).json({ message: 'Données enregistrées avec succès' }))
    .catch(error => res.status(400).json({ error }));
};
