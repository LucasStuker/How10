import React from 'react';
import './Header.scss';  

const Header = () => {
  return (
    <header className="header">
        <h1>Encontr@r</h1>
         <nav className="nav">
            <a href="#feed">Feed</a>
            <a href="#about">Sobre</a>
            
        </nav>
    </header>
  );
}

export default Header;
