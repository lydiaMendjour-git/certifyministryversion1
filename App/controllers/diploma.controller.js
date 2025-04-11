const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Récupérer les diplômes à valider
exports.getDiplomasToValidate = async (req, res) => {
  try {
    const diplomas = await prisma.diploma.findMany({
      where: {
        complete: false,
      },
    });

    res.json(diplomas); // Retourne les diplômes non validés
  } catch (error) {
    console.error('Erreur complète:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des diplômes' });
  }
};

// Valider un diplôme individuel
exports.validateDiploma = async (req, res) => {
  try {
    const { diplomaId } = req.params;
    const diploma = await prisma.diploma.update({
      where: { id: parseInt(diplomaId) },
      data: { complete: true },
    });
    res.json({
      message: `Diplôme ${diploma.nom} validé avec succès !`,
      diploma,
    });
  } catch (error) {
    console.error('Erreur lors de la validation du diplôme:', error);
    res.status(500).json({ message: 'Erreur lors de la validation du diplôme' });
  }
};

//valider tout les diplomes
exports.validateAllDiplomas = async (req, res) => {
  try {
    const updatedDiplomas = await prisma.diploma.updateMany({
      where: { complete: false },
      data: { complete: true },
    });

    res.json({
      message: `${updatedDiplomas.count} diplômes validés avec succès !`,
    });
  } catch (error) {
    console.error('Erreur lors de la validation de tous les diplômes:', error);
    res.status(500).json({ message: 'Erreur lors de la validation de tous les diplômes.' });
  }
};

//les diplomes validés par ministere
exports.getValidatedDiplomas = async (req, res) => {
  try {
    const validatedDiplomas = await prisma.diploma.findMany({
      where: {
        complete: true, // Diplômes validés
      },
    });

    res.json(validatedDiplomas); // Retourne les diplômes validés
  } catch (error) {
    console.error('Erreur lors de la récupération des diplômes validés :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des diplômes validés.' });
  }
};
