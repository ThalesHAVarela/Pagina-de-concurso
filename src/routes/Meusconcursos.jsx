// Inscricoes.js
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';


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

  const card = (
    <React.Fragment>
      <CardContent sx={{}}>
        <ul>
          {inscricoes.map((inscricao) => (
            <li key={inscricao.id}>
              Concurso: {inscricao.concurso}
            </li>
          ))}
        </ul>
        <ul>
          {inscricoes.map((inscricao) => (
            <li key={inscricao.id}>
              Nome: {inscricao.nome} 
            </li>
          ))}
        </ul>
        <ul>
          {inscricoes.map((inscricao) => (
            <li key={inscricao.id}>
              Sobrenome: {inscricao.sobrenome} 
            </li>
          ))}
        </ul>
        <ul>
          {inscricoes.map((inscricao) => (
            <li key={inscricao.id}>
              Email: {inscricao.email}
            </li>
          ))}
        </ul>
        <ul>
          {inscricoes.map((inscricao) => (
            <li key={inscricao.id}>
              Telefone: {inscricao.telefone}
            </li>
          ))}
        </ul>

      </CardContent>
      <CardActions>
        <Button size="small">Apagar</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275}}>
      <h2>Inscrições</h2>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Inscricoes;