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
  isFloat,
}) => {
  const handleOnChange = (x) => {
    onChange({
      target: {
        value: isFloat ? x.target.value.replace(',', '.') : x.target.value,
      },
    });
  };

  return (
    <Container>
      {title !== '' && (
      <Title>
        {title}
      </Title>
      )}
      <InputStyle
        value={value}
        onChange={handleOnChange}
        placeholder={placeHolder}
        disabled={disabled}
      />
    </Container>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  isFloat: PropTypes.bool,
};

Input.defaultProps = {
  title: '',
  placeHolder: '',
  disabled: false,
  isFloat: false,
};

export default Input;
