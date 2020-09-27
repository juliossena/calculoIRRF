import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { operations } from '../../redux';
import Button from '../../shared/components/button/Button';
import { Box, H1 } from '../../shared/components/defaultComponents';
import Input from '../../shared/components/input/Input';
import {
  BoxButtons,
} from './styles';

const Register = () => {
  const dispatch = useDispatch();
  const insertUser = (user) => dispatch(operations.insertUser(user));
  const history = useHistory();
  const [dataRegister, setDataRegister] = useState({
    name: '',
    cpf: '',
    salary: 0,
  });

  const handleCancelRegister = () => {
    history.push('/');
  };

  const handleRegister = () => {
    insertUser({ ...dataRegister });
    history.push('/');
  };

  return (
    <Box>
      <H1>
        Cadastrar funcionário
      </H1>
      <Input
        value={dataRegister.name}
        onChange={(x) => setDataRegister({ ...dataRegister, name: x.target.value })}
        title="Nome do funcionário"
        placeHolder="Nome Completo"
      />
      <Input
        value={dataRegister.cpf}
        onChange={(x) => setDataRegister({ ...dataRegister, cpf: x.target.value })}
        title="CPF"
        placeHolder="000.000.000-00"

      />
      <Input
        value={dataRegister.salary}
        onChange={(x) => setDataRegister({ ...dataRegister, salary: x.target.value })}
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
          onClick={handleRegister}
        />
      </BoxButtons>
    </Box>
  );
};

export default Register;
