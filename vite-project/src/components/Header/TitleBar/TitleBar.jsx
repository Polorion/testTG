import * as React from 'react';
import S from './TitleBar.module.scss'
import {DataSlider} from "./DataSlider/DataSlider.jsx";
import {MyButton} from "../../shared/MyButton/MyButton.jsx";

export const TitleBar = () => {
    return (
        <div className={S.body}>
            <DataSlider/>
            <div>
                <MyButton text={'Неделя'}/>
            </div>
            <div>
                <MyButton text={'Месяц'}/>
            </div>
            <div>
                <MyButton text={'Год'}/>
            </div>
            <div>
                <MyButton active={true} text={'Выбрать период'}/>
            </div>
        </div>
    );
};