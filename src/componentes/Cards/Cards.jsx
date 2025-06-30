import React from 'react';
import './Card.scss'; // Vamos colocar nosso estilo aqui

const Cards = ({ caseData }) => {
  return (
    // O link pode envolver todo o card, para que ele seja clicável
    // <a href={`/caso/${caseData.id}`} className="card-link">
      <div className="card">
        <img className="card-image" src={caseData.photo} alt={caseData.name} />
        <div className="card-content">
          <h3 className="card-name">{caseData.name}</h3>
          <p className="card-details">{caseData.age} anos</p>
          <p className="card-details">{caseData.city}</p>
          <p className="card-description">{caseData.description}</p>
        </div>
      </div>
    // </a>
  );
};

export default Cards;