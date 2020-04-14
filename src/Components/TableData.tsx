/* eslint-disable react/prop-types */
import * as React from 'react';
import { TableDataNavPanel } from '../Components/TableDataNavPanel';
import { ITableCurRec, ITableHdrData, ITableRowsData } from './Types/api';

const navData = [
    { key: 1, text: 'Добавить', dtarget: '#aModal' },
    { key: 2, text: 'Редактировать', dtarget: '#aModal' },
    { key: 3, text: 'Копировать', dtarget: '#aModal' },
    { key: 4, text: 'Сохранить', dtarget: '#aModal' },
    { key: 5, text: 'Удалить', dtarget: '#aModal' },
];

interface ITableDataProps {
    colNames: ITableHdrData[];
    dataRows: ITableRowsData[];
}

const TableData: React.FC<ITableDataProps> = props => {
    const [tableCurRec, setTableCurRec] = React.useState<ITableCurRec>();
    const [htmlTblRowEl, setHtmlTblRowEl] = React.useState<HTMLTableRowElement>();

    const handleClickRow = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>): void => {
        e.preventDefault();
        //const text = e.currentTarget.cells.item(0)?.innerText;
        const curBgCol = e.currentTarget.style.background;
        const curCol = e.currentTarget.style.color;
        const idRecStr: string = e.currentTarget.cells.item(0)?.innerText.valueOf() as string;
        const idRec = parseInt(idRecStr); // e.currentTarget.cells.item(0) as Number;
        const idIdx = e.currentTarget.rowIndex;
        const curRec: ITableCurRec = {
            id: idRec,
            idx: idIdx,
            sColor: curCol,
            sBgColor: curBgCol,
        };

        if (curBgCol === 'yellow') {
            e.currentTarget.style.background = tableCurRec?.sBgColor as string;
            setTableCurRec(undefined);
        } else {
            if (htmlTblRowEl !== undefined) {
                const htmlEl: HTMLTableRowElement = htmlTblRowEl;
                htmlEl.style.background = tableCurRec?.sBgColor as string;
                setHtmlTblRowEl(undefined);
            }
            setTableCurRec(curRec);
            setHtmlTblRowEl(e.currentTarget);
            e.currentTarget.style.background = 'yellow';
        }

        alert(htmlTblRowEl?.innerHTML);
    };

    //const BodyClick = (e: React.BaseSyntheticEvent): void => {
    //    e.preventDefault();
    //    const text = (e.currentTarget as HTMLTableSectionElement).className;
    //    alert(text);
    //};

    return (
        <div className="container">
            <TableDataNavPanel items={navData} />
            <div className="row">
                <table className="table table-bordered table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            {props.colNames.map(item => (
                                <th className={item.width} scope="col" key={item.text}>
                                    {item.text}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="table-secondary">
                        {props.dataRows.map(row => (
                            <tr key={row.id} onClick={handleClickRow}>
                                {row.data.map(item => (
                                    <td key={item.id}>{item.text}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { TableData };
