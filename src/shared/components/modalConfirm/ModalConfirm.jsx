import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import { Paragraph } from '../defaultComponents';
import Modal from '../modal/Modal';
import {
  TitleModal,
  BoxButtons,
} from './styles';

const ModalConfirm = ({
  open,
  onClose,
  title,
  message,
  onClickSecondary,
  onClickPrimary,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <TitleModal>
        {title}
      </TitleModal>
      <Paragraph>
        {message}
      </Paragraph>
      <BoxButtons>
        <Button
          onClick={onClickSecondary}
          label="Cancelar"
          type="secondary"
        />
        <Button
          onClick={onClickPrimary}
          label="Confirmar"
        />
      </BoxButtons>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClickSecondary: PropTypes.func,
  onClickPrimary: PropTypes.func.isRequired,
};

ModalConfirm.defaultProps = {
  onClickSecondary: () => null,
};

export default ModalConfirm;
