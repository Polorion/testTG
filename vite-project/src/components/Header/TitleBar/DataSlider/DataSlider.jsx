import * as React from 'react';
import S from './DataSlider.module.scss'
import arrow from '../../../../assets/arrow.svg'

export const DataSlider = () => {
    return (
        <div className={S.body}>
            <button className={S.btn}><img src={arrow} alt=""/></button>
            <div className={S.info}>16 Сентябрь</div>
            <button className={S.btn}><img src={arrow} alt=""/></button>
        </div>
    );
};