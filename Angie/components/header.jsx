import React from 'react';
import '../src/css/Header.css'; // Asegúrate de tener un archivo CSS correspondiente

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Mi Sitio Web</h1>
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item"><a href="#">Inicio</a></li>
            <li className="header-menu-item"><a href="#">Acerca de</a></li>
            <li className="header-menu-item"><a href="#">Servicios</a></li>
            <li className="header-menu-item"><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
