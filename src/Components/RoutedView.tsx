/* eslint react/prop-types: 0 */
import { Link, RouteComponentProps } from '@reach/router';
import React from 'react';

interface IMenuItem {
    key: string;
    text: string;
}

interface IRoutedView extends RouteComponentProps {
    name: string;
    children: React.ReactNode;
}

const NavLink = (props: any) => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: {
                    color: isCurrent ? '#421717' : '#716d6a',
                },
            };
        }}
    />
);

const menuData = [
    { key: '/', text: 'Оргструктура' },
    { key: 'users', text: 'Пользователи' },
    { key: 'about', text: 'About' },
    { key: 'test', text: 'Testimonials' },
    { key: 'sets', text: 'Настройки' },
];

const RoutedView = (props: IRoutedView) => (
    <div className="App">
        <header id="hd-main">
            <div className="container">
                <div id="header">
                    <ul id="menu">
                        {menuData.map((item: IMenuItem) => (
                            <li key={item.key}>
                                <NavLink to={item.key}>{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div id="logo">
                        <h1>ManagerPP</h1>
                        <small>New Themes</small>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="row">
                <div className="col-12">
                    <p id="main-header">{props.name}</p>
                    {props.children}
                </div>
            </div>
        </section>
        <footer>
            <div className="container">-- FOOTER --</div>
        </footer>
    </div>
);

export default RoutedView;
