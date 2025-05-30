import React, { useState, useEffect } from 'react';
import Cards from '../../componentes/Cards/Cards';
import Popup from '../../componentes/Popup/Popup'; // Certifique-se de ter o Popup implementado
import data from '../../datas.json';
import './feedpage.scss';

const FeedPage = () => {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    setCases(data); // Carrega os dados iniciais do JSON
  }, []);

  const handleCardClick = (selected) => {
    setSelectedCase(selected); // Define o caso selecionado ao clicar no card
  };

  return (
    <div className="feed-page">
      <h1>Desaparecidos</h1>
      <div className="feed">
        {cases.map((caseItem) => (
          <Cards 
            key={caseItem.id} 
            caseItem={caseItem} 
            onClick={() => handleCardClick(caseItem)} 
          />
        ))}
      </div>

      {selectedCase && <Popup caseItem={selectedCase} onClose={() => setSelectedCase(null)} />}
    </div>
  );
};

export default FeedPage;
