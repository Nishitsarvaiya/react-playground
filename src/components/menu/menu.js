import React from 'react';
import { Container, Inner, Line } from './menu.styled';

export default function Menu({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Menu.Inner = function ({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>;
};

Menu.Line = function ({ children, ...restProps }) {
    return <Line {...restProps}>{children}</Line>;
};
