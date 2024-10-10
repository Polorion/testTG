import * as React from 'react';
import S from './Title.module.scss'

export const Title = () => {
    return (
        <div className={S.body}>
            <h1 className={S.title}>Сотрудники</h1>
            <p className={S.subTitle}>Выберите подходящий период</p>
        </div>
    );
};