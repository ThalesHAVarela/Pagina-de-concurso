// Inscricoes.js
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';


const Inscricoes = () => {
  const [inscricoes, setInscricoes] = useState([]);
  const { id } = useParams();

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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Inscrições</h2>
      <Container sx={{ display: 'flex', justifyContent: "space-around" }}>
        <Stack direction={'row'} sx={{ display: 'flex', flexWrap: "wrap", gap: "15px" }}>
          {inscricoes.map((inscricao) => (
            <Paper key={inscricao.id} sx={{ width: '25vw', display: 'flex', flexDirection: 'column'}}>
              <p>Nome: {inscricao.nome}</p>
              <p>Sobrenome: {inscricao.sobrenome}</p>
              <p>Email: {inscricao.email}</p>
              <p>Telefone: {inscricao.telefone}</p>
              <p>Concurso: {inscricao.concurso}</p>
              <button onClick={() => {
                fetch(`http://localhost:3000/inscrições/${inscricao.id}`, {
                  method: 'DELETE',
                }).then(() => {
                    fetch('http://localhost:3000/inscrições')
                    .then(response => response.json())
                    .then(data => setInscricoes(data))
                })
              }}>Deletar</button>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Inscricoes;