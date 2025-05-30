import React, { useState } from 'react';

const PopupCadastro = ({ onClose, onAddCase }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(''); // Para mostrar a foto antes de enviar

  // Função para lidar com a mudança no arquivo da foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result); // Atualiza a pré-visualização da foto
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de campos obrigatórios
    if (!name || !age || !city || !description || !photo) {
      return alert("Por favor, preencha todos os campos!");
    }

    // Criando o novo caso
    const newCase = {
      id: Date.now(),
      name,
      age,
      city,
      description,
      photo: URL.createObjectURL(photo), // Gerando uma URL temporária para a foto
    };
    console.log('Novo caso:', newCase);
    onAddCase(newCase); // Adiciona o novo caso
    onClose(); // Fecha o popup após o envio
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close" onClick={onClose}>X</button>
        <h2>Cadastrar Desaparecido</h2>
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
            <textarea
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
            />
          </div>

          <div>
            {previewPhoto && (
              <img src={previewPhoto} alt="Preview" style={{ width: '150px', marginTop: '10px' }} />
            )}
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupCadastro;
