import React, { useState } from 'react';
import './cadastroPage.scss'
const CadastroPage = ({ onAddCase }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !city || !description || !photo) {
      return alert("Por favor, preencha todos os campos");
    }

    const newCase = {
      id: Date.now(),
      name,
      age,
      city,
      description,
      photo: URL.createObjectURL(photo), // URL temporária para a foto
    };

    onAddCase(newCase); // Envia o novo caso

    // Limpa os campos
    setName('');
    setAge('');
    setCity('');
    setDescription('');
    setPhoto(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file); // Atualiza o estado da foto
    }
  };

  return (
    <div className="cadastro-page">
      <h1>Cadastrar Novo Desaparecido</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Idade</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Cidade</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Foto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            aria-label="Selecione uma foto"
          />
        </div>

        <div>
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="Pré-visualização"
              style={{ width: '150px', marginTop: '10px' }}
            />
          )}
        </div>

        <div>
          <button type="submit">Cadastrar</button> {/* Botão para submeter o formulário */}
        </div>
      </form>
    </div>
  );
};

export default CadastroPage;
