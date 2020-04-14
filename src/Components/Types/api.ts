import React from 'react';

export interface ITableHdrData {
    text: string;
    width: string;
}

export interface ITableRowData {
    id: number;
    text: string;
}

export interface ITableRowsData {
    id: number;
    data: ITableRowData[];
}

export interface ITableCurRec {
    id: number;
    idx: number;
    sColor: string | null;
    sBgColor: string;
}

export interface IModalContextProps {
    show: boolean;
    onClose: any;
    //children: React.ReactNode
}

export interface IRoutedViewProps {
    name: string;
    show: boolean;
    children: React.ReactNode;
}

export const ModalContext = React.createContext<Partial<IModalContextProps>>({});
