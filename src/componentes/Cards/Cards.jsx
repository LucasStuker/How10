import React from 'react';
import './Card.scss';  // Certifique-se de que o arquivo de estilo está sendo importado corretamente

function Cards({ caseItem, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img 
        src={caseItem.photo} 
        alt={caseItem.name} 
        className="card-image" // Classe para a imagem
      />
      <div className="card-info">
        <h3 className="card-name">{caseItem.name}</h3>
        <p className="card-details"><strong>Idade:</strong> {caseItem.age}</p>
        <p className="card-details"><strong>Cidade:</strong> {caseItem.city}</p>
        <p className="card-description">{caseItem.description}</p>
      </div>
    </div>
  );
}

export default Cards;
