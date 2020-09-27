import styled from 'styled-components';

import { colors } from '../../functions/colors';

export const Container = styled.button`
    cursor: pointer;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    width: 100%;
    background-color: ${(props) => (props.type === 'primary' ? colors.primary : colors.white)};
    color: ${(props) => (props.type === 'primary' ? colors.white : colors.primary)};
    padding: 8px 16px;
    border-radius: 4px;
`;

export default Container;
