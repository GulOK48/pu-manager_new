import * as React from 'react';

interface ITablePanelItem {
    key: number;
    text: string;
}

interface ITablePanelProps {
    items: ITablePanelItem[];
}

// -- Навигационная панель в виде кнопок -->

export const TableDataNavPanel: React.FC<ITablePanelProps> = (props: ITablePanelProps) => {
    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const text = e.currentTarget.innerHTML;
        alert(text);
    };

    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="btn-group-toggle btn-group-sm">
                    {props.items.map((item: ITablePanelItem) => (
                        <button type="button" className="btn btn-info" key={item.key} onClick={handleClickBtn}>
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

/*
 <ul className="nav nav-pills"> 
                        {props.items.map((item: ITablePanelItem) => (
                            <li className="nav-item" data-toggle="pill" key={item.key}>
                                <a className="btn btn-block" href="#">{item.text}</a>
                            </li>
                        ))}
                    </ul>
*/
