import React from 'react';
import './SobrePage.scss';

const SobrePage = () => {
  return (
    <div className="sobre-page">
      <h1>Sobre o Projeto Encontr@r</h1>
      
      <div className="sobre-content">
        <p>
          O projeto <strong>Encontr@r</strong> nasceu como um desafio acadêmico com o objetivo de criar uma solução real e funcional para um problema comum: a centralização de informações sobre casos de desaparecimento.
        </p>
        <p>
          O que você vê hoje é uma aplicação web full-stack completa, construída com tecnologias modernas e seguindo as melhores práticas do mercado.
        </p>

        <h2>Nossa Tecnologia</h2>
        <ul>
          <li><strong>Frontend:</strong> Uma interface reativa e moderna construída com <strong>React</strong> e <strong>Vite</strong>, utilizando <strong>Sass</strong> para uma estilização componentizada e limpa.</li>
          <li><strong>Backend:</strong> Uma API RESTful robusta desenvolvida em <strong>Node.js</strong> com o framework <strong>Express.js</strong>, responsável por toda a lógica de negócio.</li>
          <li><strong>Banco de Dados:</strong> Os dados são armazenados de forma segura em um banco de dados SQL na nuvem, o <strong>TiDB Cloud</strong>, com conexões protegidas por SSL.</li>
          <li><strong>Hospedagem de Mídia:</strong> As imagens são enviadas e otimizadas através do serviço <strong>Cloudinary</strong>.</li>
          <li><strong>Deploy & DevOps:</strong> Tanto o frontend (Static Site) quanto o backend (Web Service) são implantados na plataforma <strong>Render</strong>, com um fluxo de integração contínua a partir do <strong>GitHub</strong>.</li>
        </ul>

        <h2>A Jornada</h2>
        <p>
          Este projeto foi uma jornada de aprendizado intensa, superando desafios reais de desenvolvimento, como configuração de CORS, depuração de erros de conexão SSL, gerenciamento de variáveis de ambiente em produção e a implementação de um deploy completo na nuvem.
        </p>
        <p>
          Obrigado por visitar!
        </p>
      </div>
    </div>
  );
};

export default SobrePage;