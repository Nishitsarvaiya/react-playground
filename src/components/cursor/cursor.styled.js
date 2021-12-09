import styled from 'styled-components/macro';

export const Outer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

export const Inner = styled.div`
    background-color: #f8f9fa;
    min-width: 12rem;
    min-height: 12rem;
    width: 8vw;
    height: 8vw;
    transform: scale(0.04) rotate(45deg);
    opacity: 1;
    transition: transform 600ms, opacity 600ms;
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 0;
    height: 0;
    mix-blend-mode: difference;
    pointer-events: none;
    backface-visibility: hidden;

    &.is-active {
        ${Inner} {
            transform: scale(0.5);
        }
    }
`;
