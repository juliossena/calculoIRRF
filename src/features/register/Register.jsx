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
  const insertCollaborator = (collaborator) => dispatch(operations
    .insertCollaborator(collaborator));
  const history = useHistory();
  const [dataRegister, setDataRegister] = useState({
    nome: '',
    cpf: '',
    salario: '',
    desconto: '',
    dependentes: 0,
  });

  const handleCancelRegister = () => {
    history.push('/');
  };

  const handleRegister = () => {
    insertCollaborator({ ...dataRegister });
    history.push('/');
  };

  return (
    <Box>
      <H1>
        Cadastrar funcionário
      </H1>
      <Input
        value={dataRegister.nome}
        onChange={(x) => setDataRegister({ ...dataRegister, nome: x.target.value })}
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
        value={dataRegister.salario}
        onChange={(x) => setDataRegister({ ...dataRegister, salario: x.target.value })}
        title="Salário"
        placeHolder="0.000,00"
      />
      <Input
        value={dataRegister.desconto}
        onChange={(x) => setDataRegister({ ...dataRegister, desconto: x.target.value })}
        title="Desconto"
        placeHolder="000,00"
      />
      <Input
        value={dataRegister.dependentes}
        onChange={(x) => setDataRegister({ ...dataRegister, dependentes: x.target.value })}
        title="Dependentes"
        placeHolder="0"
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
