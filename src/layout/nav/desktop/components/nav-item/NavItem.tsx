import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { NavItemProps } from '../../../interfaces';

const NavItem: React.FunctionComponent<NavItemProps> = (props) => {
    const { path, label } = props;

    return (
        <li>
            <Link to={path} activeClassName="">{label}</Link>
        </li>
    );
};

export default NavItem;