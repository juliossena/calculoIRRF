import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  InputStyle,
  Title,
} from './styles';

const Input = ({
  title,
  placeHolder,
  value,
  onChange,
  disabled,
}) => (
  <Container>
    {title !== '' && (
    <Title>
      {title}
    </Title>
    )}
    <InputStyle
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      disabled={disabled}
    />
  </Container>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  title: '',
  placeHolder: '',
  disabled: false,
};

export default Input;
