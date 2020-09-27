import React from 'react';
import { useHistory } from 'react-router';

import TableCollaborators from './tableCollaborators/TableCollaborators';
import { Box, H1, Paragraph } from '../../shared/components/defaultComponents';
import ButtonImg from '../../shared/components/buttonImg/ButtonImg';
import {
  Container,
  Title,
  Text,
} from './styles';

const Home = () => {
  const history = useHistory();

  const handleOnClickRegister = () => {
    history.push('/register');
  };

  return (
    <Box>
      <H1>
        Tabelas e calculos de IRRF
      </H1>
      <Paragraph>
        A tabela do IR é um dos principais instrumentos para auxiliar
        os contribuintes na hora de enviar as informações fiscais para
        a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.
      </Paragraph>
      <Paragraph>
        Isso quer dizer que é essa a fonte para você saber qual é o percentual
        que deve ser aplicado sobre os seus rendimentos. Portanto, na hora
        de fazer o cálculo e declarar seus rendimentos, ter essa tabela é
        fundamental para que você não envie nenhum dado errado e,
        consequentemente, não caia na malha fina.
      </Paragraph>
      <H1>
        Seus funcionários
        <ButtonImg
          source="img/plus-circle-solid.svg"
          onClick={handleOnClickRegister}
          style={{ position: 'absolute', right: 0 }}
        />
      </H1>
      <TableCollaborators />
    </Box>
  );
};

export default Home;
