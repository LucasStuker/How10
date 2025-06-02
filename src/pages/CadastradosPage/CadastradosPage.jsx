import React from 'react'
import './cadastradosPage.scss'
const CadastradosPage = ({cases}) => {
  return (
    <div className="cadastrados-page">
      <h1>Dados Cadastrados</h1>
      {cases.length === 0 ? (
        <p>Nenhum dado cadastrado.</p>
      ) : (
        <div className="feed">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="card">
              <img src={caseItem.photo} alt={caseItem.name} />
              <h3>{caseItem.name}</h3>
              <p>{caseItem.age} anos - {caseItem.city}</p>
              <p>{caseItem.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CadastradosPage