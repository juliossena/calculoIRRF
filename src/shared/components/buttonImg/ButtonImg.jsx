import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Img,
} from './styles';

const ButtonImg = ({
  source,
  onClick,
  width,
  height,
  style,
}) => (
  <Container onClick={onClick} style={style}>
    <Img
      src={source}
      width={width}
      height={height}
    />
  </Container>
);

ButtonImg.propTypes = {
  source: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

ButtonImg.defaultProps = {
  width: '24px',
  height: '24px',
  style: {},
};

export default ButtonImg;
