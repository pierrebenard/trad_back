exports.searchData = async (req, res, next) => {
  const { option } = req.query;

  try {
    const db = req.app.locals.db; // Utilisez l'objet db existant provenant de la connexion à la base de données

    const collection = db.collection('nom_de_votre_collection'); // Remplacez par le nom réel de votre collection

    const results = await collection.find({ date: option }).toArray();

    res.status(200).json(results);
  } catch (error) {
    console.log('Erreur lors de la recherche dans la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la recherche dans la base de données' });
  }
};
