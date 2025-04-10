import React, { useEffect, useState } from "react";


function DiplomesAValider() {
  const [diplomes, setDiplomes] = useState([]);

  useEffect(() => {
    setDiplomes([
      { id: 1, nom: "Licence Info - Université A" },
      { id: 2, nom: "Master Biologie - Université B" },
    ]);
  }, []);

  const validerTous = () => {
    alert("✅ Tous les diplômes ont été validés !");
  };

  return (
    <div className="diplomes-container">
      <h2>🎓 Diplômes à valider</h2>
      <ul>
        {diplomes.map((d) => (
          <li key={d.id}>{d.nom}</li>
        ))}
      </ul>
      <button className="validate-button">✅ Valider tous les diplômes</button>
    </div>
  );
}


export default DiplomesAValider;
