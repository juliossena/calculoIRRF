import React from 'react';
import { useSelector } from 'react-redux';

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
  const collaborators = useSelector((state) => state.collaboratorsReducer.collaborators);

  const renderColumnCollaborators = (collaborator) => (
    <LineTable>
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
        />
        <ButtonImg
          width="16px"
          height="16px"
          source="img/edit-solid.svg"
          style={{ margin: 4 }}
        />
        <ButtonImg
          width="16px"
          height="16px"
          source="img/trash-solid.svg"
          style={{ margin: 4 }}
        />
      </ColumnTable>
    </LineTable>
  );

  return (
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
        {collaborators.map((collaborator) => renderColumnCollaborators(collaborator))}
      </BodyTable>
    </Table>
  );
};

export default TableCollaborators;
