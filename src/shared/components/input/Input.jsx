import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from '../defaultComponents';
import {
  Container,
  InputStyle,
  Title,
} from './styles';

const Input = ({ title, placeHolder }) => (
  <Container>
    {title !== '' && (
    <Title>
      {title}
    </Title>
    )}
    <InputStyle placeholder={placeHolder} />
  </Container>
);

Input.propTypes = {
  title: PropTypes.string,
  placeHolder: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  placeHolder: '',
};

export default Input;
