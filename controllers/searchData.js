exports.searchData = (req, res, next) => {
  const { option } = req.query;

  // Effectuez votre logique de recherche avec la valeur de l'option
  // Utilisez la méthode appropriée de votre modèle Mongoose pour interroger la base de données

  TradeRequest.find({ date: option }) // Exemple de recherche sur la propriété "date" égale à l'option sélectionnée
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erreur lors de la recherche dans la base de données' });
    });
};
