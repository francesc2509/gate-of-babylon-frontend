import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { NavItemProps } from '../../../interfaces';

import './NavItem.scss'

const NavItem: React.FunctionComponent<NavItemProps> = (props) => {
    const { path, label } = props;

    return (
        <li className="Nav-item-desktop">
            <Link to={path} activeClassName="active">{label}</Link>
        </li>
    );
};

export default NavItem;