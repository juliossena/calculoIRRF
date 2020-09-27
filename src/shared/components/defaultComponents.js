import styled from 'styled-components';

import { colors } from '../functions/colors';

export const Box = styled.div`
    max-width: 800px;
    width: 95%;
    padding: 16px;
    background-color: ${colors.white};
    margin: 16px auto;
    border-radius: 4px;
`;

export const H1 = styled.h1`
    color: ${colors.textColor};
    font-size: 18px;
    margin: 16px auto 32px auto;
    text-align: center;
    position: relative;
`;

export const H2 = styled.h2`
    color: ${colors.primaryLight};
    font-size: 14px;
    text-align: left;
    position: relative;
    padding: 8px 0px;
    border-bottom: 1px solid ${colors.primaryLight};
`;

export const Paragraph = styled.p`
    margin: 16px auto;
    text-align: justify;
    font-size: 14px;
    color: ${colors.textColorLight}
`;
