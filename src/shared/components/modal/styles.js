import styled from 'styled-components';

import { Box } from '../defaultComponents';
import { colors } from '../../functions/colors';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center
`;

export const Shadow = styled.div`
    background-color: ${colors.black};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
`;

export const BoxChildren = styled(Box)`
    max-width: 600px;
    padding: 16px;
    z-index: 2;
`;
