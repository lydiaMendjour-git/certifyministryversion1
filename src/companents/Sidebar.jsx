import React from "react";

function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <div className="item" onClick={() => onSelect("a_valider")} style={{ cursor: "pointer" }}>
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/5227/5227551.png"
          alt="Diplôme à valider"
        />
        <div className="text">Diplôme à valider</div>
      </div>

      <div className="item" onClick={() => onSelect("valides")} style={{ cursor: "pointer" }}>
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/9523/9523987.png"
          alt="Diplômes validés"
        />
        <div className="text">Diplômes validés par vous</div>
      </div>

      <div className="item" onClick={() => onSelect("bdd")} style={{ cursor: "pointer" }}>
        <img
          className="icon"
          src="https://cdn4.iconfinder.com/data/icons/modern-technologies/32/technology_BDD_testing_laptop-512.png"
          alt="Intégrer votre BDD"
        />
        <div className="text">Intégrer votre BDD</div>
      </div>

      <div className="item" onClick={() => onSelect("compte")} style={{ cursor: "pointer" }}>
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/6210/6210134.png"
          alt="Gérer votre compte"
        />
        <div className="text">Gérer votre compte</div>
      </div>
    </div>
  );
}

export default Sidebar;
