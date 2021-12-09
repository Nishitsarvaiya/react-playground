import React, { useEffect, useRef } from 'react';
import { Container, Outer, Inner } from './cursor.styled';

export default function Cursor({ children, ...restProps }) {
    const cursorRef = useRef(null);
    const mouseRef = useRef({
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0,
        lastX: 0,
        lastY: 0,
        ease: 0.1,
        raf: -1,
    });

    useEffect(() => {
        window.addEventListener('mousemove', function (e) {
            mouseRef.current.mouseX = e.pageX - cursorRef.current.getBoundingClientRect().width / 2;
            mouseRef.current.mouseY = e.pageY - cursorRef.current.getBoundingClientRect().height / 2;
            mouseRef.current.currentX = e.pageX - cursorRef.current.getBoundingClientRect().width / 2;
            mouseRef.current.currentY = e.pageY - cursorRef.current.getBoundingClientRect().height / 2;
        });

        return () => {
            window.removeEventListener('mousemove');
        };
    }, []);

    useEffect(() => {
        function lerp(a, b, n) {
            return (1 - n) * a + n * b;
        }

        function followMouse() {
            mouseRef.current.raf = requestAnimationFrame(followMouse);

            mouseRef.current.lastX = lerp(mouseRef.current.lastX, mouseRef.current.currentX, mouseRef.current.ease);
            mouseRef.current.lastY = lerp(mouseRef.current.lastY, mouseRef.current.currentY, mouseRef.current.ease);

            cursorRef.current.style.transform = `translate3d(${mouseRef.current.lastX}px, ${mouseRef.current.lastY}px, 0)`;
        }

        mouseRef.current.raf = requestAnimationFrame(followMouse);

        return () => {};
    }, []);

    return (
        <Container ref={cursorRef} {...restProps}>
            {children}
        </Container>
    );
}

Cursor.Outer = function ({ children, ...restProps }) {
    return <Outer {...restProps}>{children}</Outer>;
};

Cursor.Inner = function ({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>;
};
