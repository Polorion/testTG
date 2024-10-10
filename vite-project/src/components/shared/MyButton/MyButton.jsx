import * as React from 'react';
import S from './MyButton.module.scss'

export const MyButton = ({text, active}) => {
    return (
        <div className={`${S.body} ${active && S.active}`}>
            <button>{text}</button>
        </div>
    );
};