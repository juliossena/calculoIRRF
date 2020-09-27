import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BoxChildren,
  Shadow,
} from './styles';

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <Shadow onClick={onClose} />
      <BoxChildren>
        {children}
      </BoxChildren>
    </Container>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
