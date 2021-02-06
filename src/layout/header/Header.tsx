import React from 'react';

import './Header.scss'

const Header: React.FunctionComponent<{ children?: React.ReactNode}> = (props) => {
    return (
        <div className="Header">
            <header>
                <h1>FMB</h1>
            </header>
        </div>
    );
};

export default Header;