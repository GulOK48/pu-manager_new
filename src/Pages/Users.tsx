import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { TableData } from '../Components/TableData';
import { ITableHdrData, ITableRowsData } from '../Components/Types/api';

interface IUsersProps extends RouteComponentProps {
    path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const THeaderData: ITableHdrData[] = [
    { text: 'Ид.', width: 'width: 4%' },
    { text: 'Фамилия, имя, отчество', width: 'width: 14%' },
    { text: 'Компания', width: 'width: 20%' },
    { text: 'Типовая роль', width: 'width: 20%' },
    { text: 'Должность', width: 'width: 7%' },
    { text: 'Email', width: 'width: 4%' },
    { text: 'Логин', width: 'width: 4%' },
    { text: 'Пароль', width: 'width: 4%' },
    { text: 'Дата ввода', width: 'width: 7%' },
    { text: 'Дата блокировки', width: 'width: 14%' },
];

const TRowsData: ITableRowsData[] = [
    {
        id: 1,
        data: [
            { id: 1, text: '123' },
            { id: 2, text: 'Гуляев Олег кузьмич' },
            { id: 3, text: 'ООО "Мечел-ИнфоТех"' },
            { id: 4, text: 'Технический администратор' },
            { id: 5, text: 'Программист' },
            { id: 6, text: 'gulok@yandex.ru' },
            { id: 7, text: 'GULYAEVOK' },
            { id: 8, text: 'Gudvin48' },
            { id: 9, text: '15.03.2012' },
            { id: 10, text: '' },
        ],
    },
    {
        id: 2,
        data: [
            { id: 1, text: '124' },
            { id: 2, text: 'Гуляев Олег кузьмич' },
            { id: 3, text: 'ООО "Мечел-ИнфоТех"' },
            { id: 4, text: 'Пользователь' },
            { id: 5, text: 'Программист' },
            { id: 6, text: 'gulok@yandex.ru' },
            { id: 7, text: 'GULYAEVOK' },
            { id: 8, text: 'Gudvin48' },
            { id: 9, text: '15.03.2012' },
            { id: 10, text: '' },
        ],
    },
    {
        id: 3,
        data: [
            { id: 1, text: '125' },
            { id: 2, text: 'Гуляев Олег кузьмич' },
            { id: 3, text: 'ООО "Мечел-ИнфоТех"' },
            { id: 4, text: 'Пользователь' },
            { id: 5, text: 'Программист' },
            { id: 6, text: 'gulok@yandex.ru' },
            { id: 7, text: 'GULYAEVOK' },
            { id: 8, text: 'Gudvin48' },
            { id: 9, text: '15.03.2012' },
            { id: 10, text: '' },
        ],
    },
    {
        id: 4,
        data: [
            { id: 1, text: '126' },
            { id: 2, text: 'Гуляев Олег кузьмич' },
            { id: 3, text: 'ООО "Мечел-ИнфоТех"' },
            { id: 4, text: 'Пользователь' },
            { id: 5, text: 'Программист' },
            { id: 6, text: 'gulok@yandex.ru' },
            { id: 7, text: 'GULYAEVOK' },
            { id: 8, text: 'Gudvin48' },
            { id: 9, text: '15.03.2012' },
            { id: 10, text: '' },
        ],
    },
];

const Users: React.FC<IUsersProps> = () => {
    return (
        <div>
            <TableData colNames={THeaderData} dataRows={TRowsData} />
        </div>
    );
};

export { Users };
