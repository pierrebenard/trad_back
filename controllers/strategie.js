const mongoose = require('mongoose');
const StrategieSchema = require('../models/Strategie');

exports.createStrategie = (req, res) => {
  const username = req.body.username;
  const nomStrategie = req.body.nomStrategie;

  const Strategie = mongoose.model("Strategie", StrategieSchema);

  Strategie.findOne({ nomStrategie: nomStrategie })
    .then((existingStrategie) => {
      if (existingStrategie) {
        return res.status(400).json({ error: "Cette stratégie existe déjà" });
      }

      const strategie = new Strategie({
        nomStrategie: nomStrategie,
        username: username
      });

      strategie.save()
        .then(() => {
          res.status(200).json({ message: 'Stratégie enregistrée avec succès' });
        })
        .catch((error) => {
          res.status(500).json({ error: "Erreur lors de l'enregistrement de la stratégie", details: error.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: "Erreur lors de la vérification de l'existence de la stratégie", details: error.message });
    });
};


exports.suppressionStrategie = (req, res) => {
    const username = req.body.username;
    const nomStrategie = req.body.nomStrategie;
  
    const Strategie = mongoose.model("Strategie", StrategieSchema);
  
    Strategie.deleteMany({ nomStrategie: nomStrategie })
      .then(() => {
        res.status(200).json({ message: 'Stratégie supprimée avec succès' });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression de la stratégie" });
      });
};

exports.recuperationStrategie = (req, res) => {
    const username = req.params.username;
  
    const Strategie = mongoose.model("Strategie", StrategieSchema);
  
    Strategie.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la récupération des stratégies" });
      });
  };