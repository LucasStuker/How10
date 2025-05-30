import React from 'react';
import './Popup.scss';  // Importando o arquivo de estilo para o Popup

function Popup({ caseItem, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close" onClick={onClose}>X</button>
        <img src={caseItem.photo} alt={caseItem.name} className="popup-image" />
        <h3>{caseItem.name}</h3>
        <p><strong>Idade:</strong> {caseItem.age} anos</p>
        <p><strong>Cidade:</strong> {caseItem.city}</p>
        <p>{caseItem.description}</p>
      </div>
    </div>
  );
}

export default Popup;
