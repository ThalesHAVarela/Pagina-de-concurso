// Inscricoes.js
import React, { useEffect, useState } from 'react';

const Inscricoes = () => {
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    const fetchInscricoes = async () => {
      try {
        const response = await fetch('http://localhost:3000/inscrições', {
          method: 'GET',
        });
        const data = await response.json();
        setInscricoes(data);
      } catch (error) {
        console.error('Erro ao buscar inscrições', error);
      }
    };
    fetchInscricoes();
  }, []);

  return (
    <div>
      <h2>Inscrições</h2>
      <ul dir='row'>
        {inscricoes.map((inscricao) => (
          <li key={inscricao.id}>
            Concurso: {inscricao.concursoId} - Nome: {inscricao.nome} - Sobrenome: {inscricao.sobrenome} - Email: {inscricao.email} - Telefone: {inscricao.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inscricoes;