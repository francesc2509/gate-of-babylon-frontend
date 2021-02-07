import React from 'react';
import { routes } from '../../../shared/routes';
import { NavItem } from './components';


import './Mobile.scss'

const Mobile: React.FunctionComponent<{ children?: React.ReactNode }> = () => {
    const navItems = routes.map((route) => {
        const { label, icon, path } = route;

        return (
            <NavItem label={label} icon={icon} path={path} key={path} />
        );
    });

    return (
        <ul className="Nav-mobile">
            {navItems}
        </ul>
    );
}

export default Mobile;