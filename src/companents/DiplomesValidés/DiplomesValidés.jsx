import React, { useEffect, useState } from "react";
import "./DiplomesValidés.css";

function DiplomesValidés() {
  const [validatedDiplomes, setValidatedDiplomes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch validated diplomas from the backend
  useEffect(() => {
    const fetchValidatedDiplomes = async () => {
      try {
        const response = await fetch("http://localhost:3001/diplomes/valides");
        const data = await response.json();
        setValidatedDiplomes(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des diplômes validés :", error);
        setLoading(false);
      }
    };

    fetchValidatedDiplomes();
  }, []);

  return (
    <div className="validated-container">
      <h2>✅ Diplômes validés</h2>

      {/* Show buttons if necessary in the future */}
      <div className="buttons-container">
        {/* Placeholder for additional buttons or functionality */}
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : validatedDiplomes.length === 0 ? (
        <p>Aucun diplôme validé.</p>
      ) : (
        <ul className="validated-list">
          {validatedDiplomes.map((diplome) => (
            <li key={diplome.id} className="validated-item">
              <div className="validated-info">
                <p><strong>Titre :</strong> {diplome.diplomaTitle || "Non spécifié"}</p>
                <p><strong>Étudiant :</strong> {diplome.studentName || "Non spécifié"}</p>
                <p><strong>Établissement :</strong> {diplome.etablissement || "Non spécifié"}</p>
                <p><strong>Date de délivrance :</strong> {diplome.dateOfIssue || "Non spécifié"}</p>
                <p><strong>Spécialité :</strong> {diplome.speciality || "Non spécifié"}</p>
                <p><strong>Type :</strong> {diplome.diplomaType || "Non spécifié"}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DiplomesValidés;
