import * as React from 'react';
import S from './TableBody.module.scss'
import {TableItem} from "./TableItem/TableItem.jsx";
import one from "../../../assets/one.png";
import two from "../../../assets/two.png";
import three from "../../../assets/three.png";
import four from "../../../assets/four.png";

export const TableBody = () => {
    const items = [
        {
            img: one,
            name: 'Кузьмин Павел',
            id: 1,
            count: 7,
            client: 12,
            profit: '12 900',
            sell: 30
        }, {
            img: two,
            name: 'Гнебеда Андрей',
            id: 2,
            count: 5,
            client: 20,
            profit: '19 650',
            sell: 12
        }, {
            img: three,
            name: 'Копосов Петр',
            id: 3,
            count: 7,
            client: 21,
            profit: '20 500',
            sell: 25
        }, {
            img: four,
            name: 'Борисов Сергей',
            id: 4,
            count: 7,
            client: 18,
            profit: '17 800',
            sell: 32
        },
    ]
    return (
        <div className={S.body}>
            <table className={S.table}>
                <tr className={S.tableHeader}>
                    <td>
                        <div className={S.firstTitle}>Сотрудники</div>
                    </td>
                    <td>
                        <div>Кол-во смен</div>
                    </td>
                    <td>
                        <div>Клиентов</div>
                    </td>
                    <td>
                        <div>Заработано</div>
                    </td>
                    <td>
                        <div>Продано</div>
                    </td>
                </tr>
                {
                    items.map((el, i) => <TableItem i={i} key={el.id} data={el}/>)
                }
            </table>
        </div>
    );
};