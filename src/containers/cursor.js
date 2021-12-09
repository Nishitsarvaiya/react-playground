import React from 'react';
import { Cursor } from '../components';

export function CursorContainer() {
    return (
        <Cursor>
            <Cursor.Outer>
                <Cursor.Inner></Cursor.Inner>
            </Cursor.Outer>
        </Cursor>
    );
}
