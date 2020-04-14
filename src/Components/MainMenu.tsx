import * as React from 'react';

interface IMenuItem {
    key: number;
    text: string;
}

interface IMainMenuProps {
    items: IMenuItem[];
}

export const MainMenu: React.FC<IMainMenuProps> = (props: IMainMenuProps) => {
    return (
        <div id="header">
            <ul id="menu">
                {props.items.map((item: IMenuItem) => (
                    <li key={item.key}>
                        <a href="">{item.text}</a>
                    </li>
                ))}
            </ul>
            <div id="logo">
                <h1>ManagerPP</h1>
                <small>New Themes</small>
            </div>
        </div>
    );
};
