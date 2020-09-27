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
    />
  </Container>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeHolder: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  placeHolder: '',
};

export default Input;
