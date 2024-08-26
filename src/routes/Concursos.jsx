

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { NavLink  } from 'react-router-dom';

export default function Concursos() {

  return (
    <Box sx={{ display: 'flex', flexDirection: "column"}}>
      
        <Typography paragraph variant='h5'sx={{textAlign:'center'}}>
          Concurso BB
        </Typography>

        <Typography paragraph>
          O concurso Banco do Brasil ofertou 6 mil vagas de nível médio para o cargo de escriturário.
          O cargo é dividido em nomenclaturas específicas, conforme a forma de relacionamento com o mercado.
          No edital publicado recentemente, as vagas são destinadas às nomenclaturas de Agente Comercial e Agente de Tecnologia.
        </Typography>

        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Inscritos" stroke="#8884d8" activeDot={{ r: 8 }}/>
        </LineChart>

        <Typography paragraph>
        O último concurso Banco do Brasil foi realizado em 2021 e ofertou 4.480 vagas para o cargo de Escriturário (Agente comercial e Agente de TI.). Houve vagas para todos os estados do Brasil e para o Distrito Federal. Eram 2.240 vagas imediatas e 2.240 vagas para formação de cadastro de reserva.
        </Typography>

        <Typography paragraph>
        O concurso Banco do Brasil realizado em 2018 teve a oferta de 30 vagas imediatas e 30 para formação de cadastro de reserva no cargo de Escriturário. A remuneração inicial ofertada foi de R$ 2.718,73.
        O certame teve 127.304 candidatos inscritos e ofertou vagas para as seguintes localidades: Rio de Janeiro, Distrito Federal e São Paulo.
        </Typography>

        <Typography paragraph>
        O concurso Banco do Brasil para o cargo de escriturário publicado em 2015 teve oportunidades direcionadas para os estados do Ceará, Paraíba, Pernambuco, Piauí, Rio Grande do Norte e Sergipe. A banca organizadora foi a Fundação CESGRANRIO.
        </Typography>

        <Typography paragraph variant='h5'sx={{textAlign:'center'}}>
          Concurso Caixa Econômica
        </Typography>

        <Typography paragraph>
          Segundo a Caixa Econômica Federal, 1,2 milhões de inscrições foram confirmadas para o concurso de 2024, que oferece mais de 4 mil oportunidades (entre vagas e cadastro reserva).
        </Typography>

        <Typography paragraph>
          São 2 mil vagas para o cargo de Técnico Bancário Novo (TBN), para carreira geral na instituição, e outras 2 mil vagas para TBN na área de Tecnologia da Informação, todas de nível médio.
          Além destas, há 50 vagas de nível superior, sendo 28 para médicos do trabalho e 22 para engenheiros de segurança do trabalho.
        </Typography>

        <Typography paragraph>
          As remunerações iniciais variam conforme o cargo escolhido. O aprovado em cargo de nível médio começará a carreira no banco com salário de R$ 3.762.
          Já o concurso para as carreiras profissionais de médico do trabalho e de engenheiro de segurança do trabalho é de nível superior, com remuneração inicial de R$ 11.186 e R$ 14.915, respectivamente.
        </Typography>

        <LineChart width={500} height={300} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Inscritos" stroke="#8884d8" activeDot={{ r: 8 }}/>
        </LineChart>
        
        <Typography paragraph>
          As provas do concurso Caixa para os cargos de nível médio serão compostas por 60 questões, sendo 25 de conhecimentos básicos e 35, específicos.
          Para os cargos de nível superior, as provas objetivas serão compostas por 70 questões, sendo 30 de conhecimentos básicos e 40, específicos.
          Na etapa discursiva, o candidato produzirá uma redação sobre tema proposto relacionado a conhecimentos específicos.
        </Typography>

    </Box>
  );
}

const data = [
  {
    name:"2015",
    Inscritos: 103512,
    
  },
  {
    name:"2018",
    Inscritos: 127304,
    
  },
  {
    name:"2021",
    Inscritos: 145490,
    
  },
  {
    name:"2024",
    Inscritos: 210362,
    
  }
]
const data1 = [
  {
    name:"2015",
    Inscritos: 351378,
    
  },
  {
    name:"2018",
    Inscritos: 530434,
    
  },
  {
    name:"2021",
    Inscritos: 502788,
    
  },
  {
    name:"2024",
    Inscritos: 789321,
    
  }
]

