import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DiplomesAValider from "./DiplomesAValider"; // en haut

function App() {
  const [section, setSection] = useState("a_valider");

  const renderContent = () => {
    switch (section) {
      case "a_valider":
        return <DiplomesAValider />;
      case "valides":
        return <h2>✅ Diplômes validés par vous</h2>;
      case "bdd":
        return <h2>🗂️ Intégration de votre base de données</h2>;
      case "compte":
        return <h2>⚙️ Gérer votre compte</h2>;
      default:
        return <h2>Bienvenue sur CertifyMe</h2>;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar onSelect={setSection} /> {/* Passer setSection en prop */}
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
