// src/pages/CadastradosPage/CadastradosPage.jsx - VERSÃO CORRIGIDA E COMPLETA

import React, { useState, useEffect } from 'react';
import Cards from '../../componentes/Cards/Cards'; 
import { API_URL } from '../../apiConfig.js';
import './cadastradosPage.scss';

const CadastradosPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch(`${API_URL}/cases`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API.');
        }
        const data = await response.json();
        setCases(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  if (loading) return <p>Carregando dados cadastrados...</p>;
  if (error) return <p>Ocorreu um erro: {error}</p>;

  return (
    <div className="cadastrados-page">
      <h1>Dados Cadastrados</h1>
      <div className="cards-container"> {/* Usando uma classe similar à do feed */}
        {cases.length > 0 ? (
          cases.map(caseItem => (
            <Cards key={caseItem.id} caseData={caseItem} />
          ))
        ) : (
          <p>Nenhum caso cadastrado no momento.</p>
        )}
      </div>
    </div>
  );
};

export default CadastradosPage;