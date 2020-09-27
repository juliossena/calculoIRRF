import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ViewCollaborator from './viewCollaborator/ViewCollaborator';
import { operations } from '../../../redux';
import ModalConfirm from '../../../shared/components/modalConfirm/ModalConfirm';
import { calcDiscountIRRF } from '../../../shared/functions/irrf';
import ButtonImg from '../../../shared/components/buttonImg/ButtonImg';
import { doubleToReal } from '../../../shared/functions/money';
import {
  Table,
  LineTable,
  ColumnTableHeader,
  ColumnTable,
  HeaderTable,
  BodyTable,
} from './styles';

const TableCollaborators = () => {
  const dispatch = useDispatch();
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [viewCollaborator, setViewCollaborator] = useState(null);
  const [collaboratorDelete, setCollaboratorDelete] = useState({});
  const collaborators = useSelector((state) => state.collaboratorsReducer.collaborators);
  const deleteCollaborator = (collaborator) => dispatch(operations
    .deleteCollaborator(collaborators, collaborator));

  if (collaborators.length === 0) {
    return null;
  }

  const handleDeleteCollaborator = () => {
    setOpenModalConfirm(false);
    deleteCollaborator(collaboratorDelete);
  };

  const openConfirmDeleteCollaborator = (collaborator) => {
    setCollaboratorDelete(collaborator);
    setOpenModalConfirm(true);
  };

  const renderRowCollaborators = (collaborator) => (
    <LineTable key={collaborator.cpf}>
      <ColumnTable>
        {collaborator.nome}
      </ColumnTable>
      <ColumnTable>
        {collaborator.cpf}
      </ColumnTable>
      <ColumnTable>
        {doubleToReal(collaborator.salario)}
      </ColumnTable>
      <ColumnTable>
        {doubleToReal(collaborator.desconto)}
      </ColumnTable>
      <ColumnTable>
        {collaborator.dependentes}
      </ColumnTable>
      <ColumnTable>
        {doubleToReal(calcDiscountIRRF(
          collaborator.salario,
          collaborator.dependentes,
          collaborator.desconto,
        ))}
      </ColumnTable>
      <ColumnTable>
        <ButtonImg
          width="16px"
          height="16px"
          source="img/eye-solid.svg"
          style={{ margin: 4 }}
          onClick={() => {
            setViewCollaborator({ ...collaborator });
            setIsEdit(false);
          }}
        />
        <ButtonImg
          width="16px"
          height="16px"
          source="img/edit-solid.svg"
          style={{ margin: 4 }}
          onClick={() => {
            setViewCollaborator({ ...collaborator });
            setIsEdit(true);
          }}
        />
        <ButtonImg
          onClick={() => openConfirmDeleteCollaborator(collaborator)}
          width="16px"
          height="16px"
          source="img/trash-solid.svg"
          style={{ margin: 4 }}
        />
      </ColumnTable>
    </LineTable>
  );

  const renderModalConfirmDelete = () => (
    <ModalConfirm
      open={openModalConfirm}
      onClose={() => setOpenModalConfirm(false)}
      title="Confirmar a exclusão do funcionário?"
      message="O funcionário selecionado, será removido permanentemente. Essa ação é irreversível."
      onClickSecondary={() => setOpenModalConfirm(false)}
      onClickPrimary={handleDeleteCollaborator}
    />
  );

  return (
    <>
      <ViewCollaborator collaborator={viewCollaborator} isEdit={isEdit} />
      {renderModalConfirmDelete()}
      <Table>
        <HeaderTable>
          <LineTable>
            <ColumnTableHeader>
              Nome
            </ColumnTableHeader>
            <ColumnTableHeader>
              CPF
            </ColumnTableHeader>
            <ColumnTableHeader>
              Salário
            </ColumnTableHeader>
            <ColumnTableHeader>
              Desconto
            </ColumnTableHeader>
            <ColumnTableHeader>
              Dependentes
            </ColumnTableHeader>
            <ColumnTableHeader>
              Desconto IRRF
            </ColumnTableHeader>
            <ColumnTableHeader />
          </LineTable>
        </HeaderTable>
        <BodyTable>
          {collaborators.map((collaborator) => renderRowCollaborators(collaborator))}
        </BodyTable>
      </Table>
    </>
  );
};

export default TableCollaborators;
