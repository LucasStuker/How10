

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import FeedPage from './pages/FeedPage/FeedPage';
import CadastroPage from './pages/CadastroPage/cadastroPage';
import CadastradosPage from './pages/CadastradosPage/CadastradosPage';



const App = () => {
  return (
    <BrowserRouter>

      <div className="app-container">
        <Header />
        
        <main>
          {}
          <Routes>
            {}
            <Route path="/" element={<FeedPage />} />
            
            
            <Route path="/cadastrar" element={<CadastroPage />} />
            
           
            <Route path="/cadastrados" element={<CadastradosPage />} />
            

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;