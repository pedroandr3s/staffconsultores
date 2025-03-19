import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Cerrar el menú cuando se hace clic en un enlace
  useEffect(() => {
    const handleLinkClick = () => {
      if (menuActive) {
        setMenuActive(false);
      }
    };

    const links = document.querySelectorAll('.navigation a');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [menuActive]);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" className="logo" />
      </div>
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navigation ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#servicios">NUESTROS SERVICIOS</a></li>
          <li><a href="#conocenos">CONÓCENOS</a></li>
          <li><a href="#equipo">NUESTRO EQUIPO</a></li>
          <li><a href="#ofertas">OFERTAS LABORALES</a></li>
          <li><a href="#contacto">CONTÁCTENOS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;