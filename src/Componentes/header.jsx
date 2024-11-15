import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Mi Portafolio</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
