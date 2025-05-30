import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import PopupCadastro from './componentes/PopupCadastro/popupCadastro';
import CadastradosPage from './pages/CadastradosPage/CadastradosPage'; // Importando a nova página

const App = () => {
  const [cases, setCases] = useState([]);  // Estado para armazenar os casos
  const [showPopup, setShowPopup] = useState(false);  // Controle do popup

  // Função para abrir o popup
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // Função para fechar o popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Função para adicionar um novo caso ao estado
  const handleAddCase = (newCase) => {
    setCases([...cases, newCase]);  // Adiciona o novo caso ao array de casos
  };

  return (
    <Router>
      <div className="container">
        <Header onOpenPopup={handleOpenPopup} />
        <nav>
          <Link to="/">Feed</Link> | <Link to="/cadastrados">Dados Cadastrados</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FeedPage cases={cases} />} />
          <Route path="/cadastrados" element={<CadastradosPage cases={cases} />} /> {/* Nova rota */}
        </Routes>

        <Footer />

        {/* Exibe o PopupCadastro se showPopup for true */}
        {showPopup && (
          <PopupCadastro
            onClose={handleClosePopup}
            onAddCase={handleAddCase}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
