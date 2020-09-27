import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Button = ({ type, label, onClick }) => (
  <Container type={type} onClick={onClick}>
    {label}
  </Container>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
