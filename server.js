const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const diplomaRouter = require('./App/routers/diploma.router'); // Chemin correct vers le routeur


const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Autorise les requêtes cross-origin
app.use(bodyParser.json()); // Parse les requêtes au format JSON

// Utilisation des routes pour gérer les diplômes
app.use('/diplomes', diplomaRouter);

// Middleware de gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error('Erreur interne :', err);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});



