import React from 'react';
import { Menu } from '../components';

export function MenuContainer() {
    return (
        <Menu>
            <Menu.Inner>
                <Menu.Line></Menu.Line>
                <Menu.Line></Menu.Line>
            </Menu.Inner>
        </Menu>
    );
}
