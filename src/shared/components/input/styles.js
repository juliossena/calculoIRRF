import styled from 'styled-components';
import { H1 } from '../defaultComponents';

export const Container = styled.div`
    width: 100%;
`;

export const InputStyle = styled.input`
    margin: 8px 0px;
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;

export const Title = styled(H1)`
    margin: 0px;
    text-align: left;
`;
