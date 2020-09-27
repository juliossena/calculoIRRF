import React from 'react';
import { useHistory } from 'react-router';

import Button from '../../shared/components/button/Button';
import { Box, H1, Paragraph } from '../../shared/components/defaultComponents';
import Input from '../../shared/components/input/Input';
import {
  BoxButtons,
} from './styles';

const Register = () => {
  const history = useHistory();

  const handleCancelRegister = () => {
    history.push('/');
  };

  return (
    <Box>
      <H1>
        Cadastrar funcionário
      </H1>
      <Input
        title="Nome do funcionário"
        placeHolder="Nome Completo"
      />
      <Input
        title="CPF"
        placeHolder="000.000.000-00"

      />
      <Input
        title="Salário"
        placeHolder="0.000,00"
      />
      <BoxButtons>
        <Button
          onClick={handleCancelRegister}
          label="Cancelar"
          type="secundary"
        />
        <Button
          label="Cadastrar"
        />
      </BoxButtons>
    </Box>
  );
};

export default Register;
