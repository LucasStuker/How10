// src/pages/CadastroPage/CadastroPage.jsx - VERSÃO CORRIGIDA

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o sucesso
import { API_URL } from '../../apiConfig.js';
import './CadastroPage.scss'; // Verifique se o nome do arquivo de estilo está correto

const CadastroPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age || !city || !description || !photo) {
      return alert("Por favor, preencha todos os campos e selecione uma foto.");
    }

    setIsSubmitting(true);

    // 1. Cria um FormData para enviar o arquivo e os dados
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('city', city);
    formData.append('description', description);
    formData.append('photo', photo); // Anexa o arquivo real aqui

    try {
      // 2. Faz a requisição POST para a sua API
      const response = await fetch(`${API_URL}/cases`, {
        method: 'POST',
        body: formData,
        // Ao usar FormData, o navegador define o Content-Type correto automaticamente
      });

      if (!response.ok) {
        throw new Error('A resposta do servidor não foi boa. Erro ao cadastrar.');
      }

      const result = await response.json();
      console.log('Caso cadastrado com sucesso:', result);
      alert('Caso cadastrado com sucesso!');
      navigate('/'); // 3. Redireciona para o feed após o sucesso

    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      alert(`Ocorreu um erro: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="cadastro-page">
        <h1>Cadastrar Novo Desaparecido</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Idade</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div>
            <label>Cidade</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div>
            <label>Descrição</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Foto</label>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
      </div>
  );
};

export default CadastroPage;