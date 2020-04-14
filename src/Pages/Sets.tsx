import { RouteComponentProps } from '@reach/router';
import * as React from 'react';

interface ISetsProps extends RouteComponentProps {
    path: string;
}

const Sets: React.FC<ISetsProps> = () => {
    return (
        <div className="sets">
            <p>Настройки системы</p>
        </div>
    );
};

export { Sets };
