const { spawn } = require('child_process');

exports.searchData = async (req, res, next) => {
  const { date } = req.query;
  console.log("recuperation argument requete");
  try {
    const pythonFilePath = './pyton/test.py';

    // Créer le processus Python avec la date passée en tant qu'argument
    const pythonProcess = spawn('python', [pythonFilePath, '--date', date]);

    let results = '';

    // Collecter les données renvoyées par le script Python
    pythonProcess.stdout.on('data', (data) => {
      results += data.toString();
    });

    // Gérer les erreurs éventuelles
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Erreur de sortie : ${data}`);
      res.status(500).json({ error: 'Erreur lors de l\'exécution du fichier Python' });
      return;
    });

    // Une fois le processus terminé, envoyer les résultats au front-end
    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        console.error(`Une erreur s'est produite : ${code}`);
        res.status(500).json({ error: 'Erreur lors de l\'exécution du fichier Python' });
      } else {
        console.log("pas d'erreur python");
        res.status(200).json({ results });
      }
    });
  } catch (error) {
    console.log('Erreur lors de la recherche dans la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la recherche dans la base de données' });
  }
};
