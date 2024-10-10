import * as React from 'react';
import S from './TableItem.module.scss'

export const TableItem = ({data, i}) => {
    return (

        <tr className={S.row}>
            <td className={`${S.owner} ${i === 0 && S.none}`}>
                <div className={S.bodyOwner}>
                    <img src={data.img} alt=""/>
                    <div className={S.name}>
                        <div>
                            {data.name}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>{data.count}</div>
            </td>
            <td>
                <div>{data.count}</div>
            </td>
            <td>
                <div>{data.profit} p</div>
            </td>
            <td>
                <div>{data.client}</div>
            </td>
        </tr>
    );
};