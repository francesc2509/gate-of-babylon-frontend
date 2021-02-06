import React from 'react';
import { routes } from '../../../shared/routes';
import { NavItem } from './components';


import './Mobile.css'

const Mobile: React.FunctionComponent<{ children?: React.ReactNode }> = () => {
    const navItems = routes.map((route) => {
        const { label, icon, path } = route;

        return (
            <NavItem label={label} icon={icon} path={path} key={path} />
        );
    });

    return (
        <ul>
            {navItems}
        </ul>
    );
}

export default Mobile;