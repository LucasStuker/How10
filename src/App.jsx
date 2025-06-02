import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import CadastroPage from './pages/CadastroPage/cadastroPage';
//import CadastradosPage from './pages/CadastradosPage/CadastradosPage'; 

const App = () => {
  const [cases, setCases] = useState([]);  // Estado para armazenar os casos
  

  const handleAddCase = (newCase) => {
    setCases([...cases, newCase]);  // Adiciona o novo caso ao array de casos
  };

  return (
    <Router>
      <div className="container">
       <Header/>
             <Routes>
          <Route path="/" element={<FeedPage cases={cases} />} />
          <Route path="/cadastro" element={<CadastroPage onAddCase={handleAddCase} />} /> {/* Nova rota */}
        </Routes>

        <Footer />


      </div>
    </Router>
  );
};

export default App;
