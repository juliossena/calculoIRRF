import styled from 'styled-components';

import { colors } from '../../shared/functions/colors';
import { Box, H1 } from '../../shared/components/defaultComponents';

export const Container = styled(Box)`
    
`;

export const Title = styled(H1)`

`;

export const Text = styled.p`
    margin: 16px auto;
    text-align: justify;
    font-size: 14px;
    color: ${colors.textColorLight}
`;
