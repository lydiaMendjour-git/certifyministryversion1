import React, { useEffect, useState } from "react";
import "./DiplomesAValider.css";

function DiplomesAValider() {
  const [diplomes, setDiplomes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer la liste des diplômes à valider depuis le backend
  useEffect(() => {
    const fetchDiplomes = async () => {
      try {
        const response = await fetch("http://localhost:3001/diplomes");
        const data = await response.json();
        setDiplomes(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des diplômes :", error);
        setLoading(false);
      }
    };

    fetchDiplomes();
  }, []);

  // Fonction pour valider un diplôme individuel
  const validerDiplome = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/diplomes/${id}/valider`, {
        method: "POST",
      });

      if (response.ok) {
        alert(`✅ Diplôme ${id} validé avec succès !`);
        setDiplomes((prevDiplomes) => prevDiplomes.filter((diplome) => diplome.id !== id));
      } else {
        alert("❌ Une erreur est survenue lors de la validation.");
      }
    } catch (error) {
      console.error("Erreur lors de la validation du diplôme :", error);
      alert("❌ Une erreur est survenue lors de la validation.");
    }
  };

  // Fonction pour valider tous les diplômes
  const validerTousDiplomes = async () => {
    try {
      const response = await fetch("http://localhost:3001/diplomes/valider-tous", {
        method: "POST",
      });
  
      if (response.ok) {
        alert("✅ Tous les diplômes ont été validés avec succès !");
        setDiplomes([]); // Vider la liste après validation
      } else {
        alert("❌ Une erreur est survenue lors de la validation de tous les diplômes.");
      }
    } catch (error) {
      console.error("Erreur lors de la validation de tous les diplômes :", error);
      alert("❌ Une erreur est survenue lors de la validation de tous les diplômes.");
    }
  };

  const [validatedDiplomes, setValidatedDiplomes] = useState([]);

// Fonction pour récupérer les diplômes validés
const fetchValidatedDiplomes = async () => {
  try {
    const response = await fetch("http://localhost:3001/diplomes/valides");
    const data = await response.json();
    setValidatedDiplomes(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des diplômes validés :", error);
    alert("❌ Une erreur est survenue lors de la récupération des diplômes validés.");
  }
};

  

  return (
    <div className="diplomes-container">
      <h2>🎓 Diplômes à valider</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          {/* Conteneur pour les boutons */}
          <div className="buttons-container">
            <button className="validate-all-button" onClick={validerTousDiplomes}>
              ✅ Valider tous
            </button>
          </div>

          {/* Liste des diplômes */}
          <ul className="diplomes-list">
            {diplomes.map((diplome) => (
              <li key={diplome.id} className="diplome-item">
                <div className="diplome-info">
                  <p><strong>Titre :</strong> {diplome.diplomaTitle || "Non spécifié"}</p>
                  <p><strong>Type :</strong> {diplome.diplomaType || "Non spécifié"}</p>
                  <p><strong>Étudiant :</strong> {diplome.studentName || "Non spécifié"}</p>
                  <p><strong>Établissement :</strong> {diplome.etablissement || "Non spécifié"}</p>
                  <p><strong>Spécialité :</strong> {diplome.speciality || "Non spécifié"}</p>
                </div>
                <button className="validate-button" onClick={() => validerDiplome(diplome.id)}>
                  ✅ Valider
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DiplomesAValider;
