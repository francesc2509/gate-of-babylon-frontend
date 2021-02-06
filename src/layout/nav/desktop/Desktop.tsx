import React, { ReactNode } from 'react';
import { routes } from '../../../shared/routes';
import { NavItem } from './components';

import './Desktop.css'

const Desktop: React.FunctionComponent<{ children?: ReactNode }> = (props) => {
    const navItems = routes.map(route => {
        const { icon, label, path } = route;

        return (
            <NavItem icon={icon} path={path} label={label} key={path} />
        );
    });

    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    );
}

export default Desktop;