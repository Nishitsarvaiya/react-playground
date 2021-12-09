import styled from 'styled-components/macro';

export const Container = styled.div.attrs({ 'data-stick-cursor': '' })`
    position: absolute;
    top: 60px;
    right: 60px;
`;

export const Inner = styled.div``;

export const Line = styled.div`
    width: 40px;
    height: 2px;
    background-color: #18191b;
    margin-bottom: 8px;
`;
