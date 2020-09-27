import styled from 'styled-components';

export const Container = styled.button`
    cursor: pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;

export const Img = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
