import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Button = ({
  type,
  label,
  onClick,
  style,
}) => (
  <Container
    type={type}
    onClick={onClick}
    style={style}
  >
    {label}
  </Container>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

Button.defaultProps = {
  type: 'primary',
  style: {},
};

export default Button;
