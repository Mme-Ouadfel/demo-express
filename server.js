import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const heure = new Date().toLocaleTimeString('fr-FR');
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  res.render('accueil', {
    titre: 'Ateliers de la formation',
    heureServeur: heure
  });
});

app.listen(PORT, (erreur) => {
  if (erreur) {
    console.error(`Impossible de démarrer sur le port ${PORT} : ${erreur.code}`);
    process.exit(1);
  }
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
