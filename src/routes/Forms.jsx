


import { Form } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/system';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const Formulario = () => {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const Formsubmit = async (e) => {
    e.preventDefault();
    const inscricao = { concursoId: id, nome, sobrenome, email, telefone };
    try {
      const response = await fetch('http://localhost:3000/inscrições', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inscricao),
      });

      if (response.ok) {
        alert('Inscrição enviada com sucesso!');
        setNome('');
        setSobrenome('');
        setEmail('');
        setTelefone('');
      } else {
        alert('Erro ao enviar inscrição.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar inscrição.');
    }
  }

  return (
    <div id="contact">
      <Container>
        <div>
          <h2>Inscreva-se</h2>
          <h4>* Campo obrigatório</h4>
        </div>
        <Form id="meuForm" onSubmit={Formsubmit}>
          <Stack spacing={2}>
            <Stack spacing={2} direction={'row'}>
              <TextField id="nome" label="Nome" variant="outlined" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <TextField id="sobrenome" label="Sobrenome" variant="outlined" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
            </Stack>
              <TextField id="email" type="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <TextField id="telefone" label="Telefone" variant="outlined" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
              <Button type="submit" variant="outlined">Enviar</Button>
          </Stack>
        </Form>
      </Container>
    </div>
  );
}

export default Formulario;