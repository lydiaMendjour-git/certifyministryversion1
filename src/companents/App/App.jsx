import React, { useState } from "react";
import Header from "../Header/Header";
import DiplomesAValider from "../DiplomesAValider/DiplomesAValider";
import DiplomesValidés from "../DiplomesValidés/DiplomesValidés";
import "./App.css";

function App() {
  const [section, setSection] = useState("a_valider");

  const renderContent = () => {
    switch (section) {
      case "a_valider":
        return <DiplomesAValider />;
      case "valides":
        return <DiplomesValidés />;
      case "compte":
        return <h2>⚙️ Gérer votre compte</h2>;
      default:
        return <h2>Bienvenue sur CertifyMe</h2>;
    }
  };

  return (
    <div className="app-container">
      <Header onSelect={setSection} />
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default App;
