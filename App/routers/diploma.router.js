const express = require('express');
const router = express.Router();
const diplomaController = require('../controllers/diploma.controller');

// Récupérer les diplômes à valider
router.get('/', diplomaController.getDiplomasToValidate);

// Valider tous les diplômes
router.post('/valider-tous', diplomaController.validateAllDiplomas);

// Valider un diplôme individuel
router.post('/:diplomaId/valider', diplomaController.validateDiploma);

// Récupérer les diplômes déjà validés par le ministère
router.get('/valides', diplomaController.getValidatedDiplomas);

module.exports = router;

