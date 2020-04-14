/* eslint react/prop-types: 0 */
import { Router } from '@reach/router';
import RoutedView from './Components/RoutedView';
import React from 'react';
import './App.css';
import { Sets } from './Pages/Sets';
import { Users } from './Pages/Users';

const App: React.FC = () => {
    const mainHeader = 'Управление пользователями системы "Прогноз"';
    return (
        <Router>
            <RoutedView path="/" name={mainHeader}>
                <Users path="/users" />
                <Sets path="/sets" />
            </RoutedView>
        </Router>
    );
};

export { App };
