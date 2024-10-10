import * as React from 'react';
import S from './Header.module.scss'
import {Title} from "./Title/Title.jsx";
import {TitleBar} from "./TitleBar/TitleBar.jsx";

export const Header = () => {
    return (
        <div className={S.body}>
            <Title/>
            <TitleBar/>
        </div>
    );
};