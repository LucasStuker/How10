import React from 'react';
import './Header.scss';  // Certifique-se de importar o arquivo de estilo

const Header = ({onOpenPopup}) => {
  return (
    <header className="header">
        <h1>Encontr@r</h1>
        <button onClick={onOpenPopup}> Cadastrar Desaparecido</button>
        <nav className="nav">
            <a href="#feed">Feed</a>
            <a href="#about">Sobre</a>
            
        </nav>
    </header>
  );
}

export default Header;
