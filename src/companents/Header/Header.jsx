import React from "react";
import "./Header.css"; // Importation du fichier CSS

function Header({ onSelect }) {
  return (
    <header className="header">
      <h1 className="header-title">CertifyMe For Ministry</h1>
      <div className="icons-container">
        {/* Diplôme à valider */}
        <button className="icon-button" onClick={() => onSelect("a_valider")}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM9 8h2V16H9zm4-2h2v10h-2z" />
          </svg>
        </button>

        {/* Diplômes validés */}
        <button className="icon-button" onClick={() => onSelect("valides")}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 3L3 5l7.004 7L3 19l2 2L12 13.004 21 23l2-2L13.004 12 23 3l-2-2L12 10.996 5 3z" />
          </svg>
        </button>

        {/* Gérer votre compte */}
        <button className="icon-button" onClick={() => onSelect("compte")}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.514 2 12 2zm0 2c4.416 0 8 3.582 8 8 0 4.418-3.584 8-8 8-4.418 0-8-3.582-8-8 0-4.416 3.584-8 8-8zm0 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
