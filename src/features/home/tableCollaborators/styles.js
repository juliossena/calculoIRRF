import styled from 'styled-components';

import { colors } from '../../../shared/functions/colors';

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border: 1px solid ${colors.primaryLight};
    border-radius: 4px;
`;

export const LineTable = styled.tr`
    border-bottom: 1px solid black;
    height: 40px;

    :hover {
        background-color: ${colors.grey50};
    }
`;

export const HeaderTable = styled.thead`
    background-color: ${colors.primaryLight};
    color: ${colors.primary};
    font-size: 13px;
`;

export const BodyTable = styled.tbody`
    font-size: 12px;

`;

export const ColumnTableHeader = styled.th`
    text-align: left;
    padding: 8px 8px;
`;

export const ColumnTable = styled.td`
    text-align: left;
    padding: 8px 8px;
    border-bottom: 1px solid ${colors.primaryLight};
    color: ${colors.textColor};

    
`;
