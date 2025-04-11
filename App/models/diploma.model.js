// app/models/diploma.model.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fonction pour récupérer les diplômes à valider
const getDiplomasToValidate = async () => {
    try {
        return await prisma.diplome.findMany({
            where: {
                complete: false, // diplômes non validés
            },
            include: {
                university: true, // Inclure les informations sur l'université
                faculty: true, // Faculté
                department: true, // Département
            },
        });
    } catch (error) {
        console.error('Error retrieving diplomas:', error);
        throw error;
    }
};

module.exports = { getDiplomasToValidate };
