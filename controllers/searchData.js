const { exec } = require('child_process');

exports.searchData = async (req, res, next) => {
  const { date } = req.query;

  try {
    const pythonFilePath = '../pyton/test.py';

    // Construire la commande pour exécuter le fichier Python avec la date passée en tant qu'argument
    const command = `python ${pythonFilePath} --date=${date}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Une erreur s'est produite : ${error.message}`);
        res.status(500).json({ error: 'Erreur lors de l\'exécution du fichier Python' });
        return;
      }
      if (stderr) {
        console.error(`Erreur de sortie : ${stderr}`);
        res.status(500).json({ error: 'Erreur lors de l\'exécution du fichier Python' });
        return;
      }

      // La sortie standard contient le résultat de l'exécution du fichier Python
      const results = stdout.trim(); // Assurez-vous de supprimer les espaces blancs indésirables

      // Envoyer les résultats à votre front-end si nécessaire
      res.status(200).json({ results });
    });
  } catch (error) {
    console.log('Erreur lors de la recherche dans la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la recherche dans la base de données' });
  }
};
