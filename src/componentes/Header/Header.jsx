import React from 'react';
import { Link } from 'react-router-dom';  // Importando o Link
import './Header.scss';  // Importando o SCSS

const Header = () => {
  return (
    <header className="header">
      <h1>Encontr@r</h1>
      <nav className="nav">
        <Link to="/">Feed</Link>
        <Link to="/cadastrar">Cadastrar Desaparecido</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
