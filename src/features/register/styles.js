import styled from 'styled-components';

import { colors } from '../../shared/functions/colors';
import { Box } from '../../shared/components/defaultComponents';

export const Container = styled(Box)`
    
`;

export const Title = styled.h1`
    color: ${colors.textColor};
    font-size: 18px;
    margin: 16px auto 32px auto;
    text-align: center;
    position: relative;
`;

export const Text = styled.p`
    margin: 16px auto;
    text-align: justify;
    font-size: 14px;
    color: ${colors.textColorLight}
`;

export const BoxButtons = styled.div`
    max-width: 300px;
    display: flex;
    margin: 16px auto;
`;
