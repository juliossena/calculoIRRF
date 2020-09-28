import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { operations } from '../../../../redux';
import { BoxButtons } from './styles';
import Input from '../../../../shared/components/input/Input';
import Button from '../../../../shared/components/button/Button';
import { doubleToReal } from '../../../../shared/functions/money';
import { calcDiscountIRRF } from '../../../../shared/functions/irrf';
import { H1, H2, Paragraph } from '../../../../shared/components/defaultComponents';
import Modal from '../../../../shared/components/modal/Modal';

const ViewCollaborator = ({
  collaborator,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const collaborators = useSelector((state) => state.collaboratorsReducer.collaborators);
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [collaboratorState, setCollaboratorState] = useState({ ...collaborator });
  const editCollaborator = (collaboratorSend) => dispatch(operations
    .editCollaborator(collaborators, collaboratorSend));

  useEffect(() => {
    if (collaborator) {
      setOpenModal(true);
      setCollaboratorState({ ...collaborator });
      setEdit(isEdit);
    }
  }, [collaborator, isEdit]);

  if (!collaborator || !openModal) {
    return null;
  }

  const handleSecondaryButton = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handlePrimaryButton = () => {
    if (edit) {
      editCollaborator({ ...collaboratorState });
      setOpenModal(false);
    } else {
      setEdit(true);
      setOpenModal(false);
    }
  };

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <H1>
        {collaborator.nome}
      </H1>
      <Input
        value={collaboratorState.nome}
        onChange={(x) => setCollaboratorState({
          ...collaboratorState,
          nome: x.target.value,
        })}
        title="Nome do funcionário"
        placeHolder="Nome Completo"
        disabled={!edit}
      />
      <Input
        value={collaboratorState.cpf}
        onChange={(x) => setCollaboratorState({
          ...collaboratorState,
          cpf: x.target.value,
        })}
        title="CPF"
        placeHolder="000.000.000-00"
        disabled
      />
      <Input
        value={collaboratorState.salario}
        onChange={(x) => setCollaboratorState({
          ...collaboratorState,
          salario: x.target.value,
        })}
        title="Salário"
        placeHolder="000.00"
        disabled={!edit}
        isFloat
      />
      <Input
        value={collaboratorState.desconto}
        onChange={(x) => setCollaboratorState({
          ...collaboratorState,
          desconto: x.target.value,
        })}
        title="Desconto"
        placeHolder="000.00"
        disabled={!edit}
        isFloat
      />
      <Input
        value={collaboratorState.dependentes}
        onChange={(x) => setCollaboratorState({
          ...collaboratorState,
          dependentes: x.target.value,
        })}
        title="Dependentes"
        placeHolder="0"
        disabled={!edit}
      />
      <H2>
        Desconto IRRF:
      </H2>
      <Paragraph>
        {doubleToReal(calcDiscountIRRF(
          collaboratorState.salario,
          collaboratorState.dependentes,
          collaboratorState.desconto,
        ))}
      </Paragraph>
      <BoxButtons>
        <Button
          onClick={handleSecondaryButton}
          type="Secondary"
          label={edit ? 'Cancelar' : 'Editar'}
        />
        <Button
          onClick={handlePrimaryButton}
          label={edit ? 'Salvar' : 'Fechar'}
        />
      </BoxButtons>
    </Modal>
  );
};

ViewCollaborator.propTypes = {
  collaborator: PropTypes.instanceOf(Object),
  isEdit: PropTypes.bool,
};

ViewCollaborator.defaultProps = {
  collaborator: null,
  isEdit: false,
};

export default ViewCollaborator;
