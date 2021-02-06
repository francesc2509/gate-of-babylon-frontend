import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { NavItemProps } from '../../../interfaces';

import './NavItem.scss'

const NavItem: React.FunctionComponent<NavItemProps> = (props) => {
    const { icon, label, path } = props;

    return (
        <li className="Nav-item-mob">
            <Link to={path} title={path} className="Nav-item-mob-link">
                <span className="material-icons-round md-36">{icon}</span>
                <span className="label">{label}</span>
            </Link>
        </li>
    );
};

export default NavItem;