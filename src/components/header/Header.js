import React, { useState } from "react";
import "./index.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

function Header({ setDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false); // Definir menuOpen e setMenuOpen

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    // Alterna entre abrir/fechar o menu
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" header">
      <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home">
          <FontAwesomeIcon icon={faHome} className="fa_icon" />
          <span>Home</span>
        </a>       
        <a href="#about">
          <FontAwesomeIcon icon={faAddressCard} className="fa_icon" />
          <span>Sobre</span>
        </a>
        <a href="#projects">
          <FontAwesomeIcon icon={faFolderOpen} className="fa_icon" />
          <span>Projetos</span>
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faPhone} className="fa_icon" />
          <span>Contato</span>
        </a>
      </nav>
      <div className="toggle-container" onClick={toggleDarkMode}>
        <div className={`icon ${darkMode ? "moon" : "sun"}`}>{darkMode ? "🌙" : "☀️"}</div>
        <div className={`toggle-button ${darkMode ? "dark" : "light"}`} />
      </div>
    </header>
  );
}

export default Header;
