import React, { useState, useEffect } from 'react';
import Cards from '../../componentes/Cards/Cards.jsx';
import { API_URL } from '../../apiConfig.js';
import './feedpage.scss';

const FeedPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      
      const fetchCases = async () => {
        setLoading(true);
        setError(null);
        
        const url = searchTerm 
          ? `${API_URL}/cases?search=${searchTerm}` 
          : `${API_URL}/cases`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Erro ao buscar casos da API.');
          }
          const data = await response.json();
          setCases(data);
        } catch (err) {
          setError(err.message);
          setCases([]);
        } finally {
          setLoading(false);
        }
      };

      fetchCases();

    }, 500);

    return () => clearTimeout(debounceTimer);

  }, [searchTerm]);

  return (
    <div className="feed-page">
      <h1>Desaparecidos</h1>

      <div className="search-container">
        <input 
          type="search"
          placeholder="Buscar por nome..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Buscando...</p>}
      {error && <p>Ocorreu um erro: {error}</p>}
      {!loading && cases.length > 0 && (
        <div className="cards-container">
          {cases.map(caseItem => (
            <Cards key={caseItem.id} caseData={caseItem} />
          ))}
        </div>
      )}
      {!loading && !error && cases.length === 0 && (
        <p>Nenhum caso encontrado {searchTerm && `para "${searchTerm}"`}.</p>
      )}
    </div>
  );
};

export default FeedPage;