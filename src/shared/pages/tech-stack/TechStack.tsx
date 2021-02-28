import React from 'react';
import { TechStackItem } from './components';

import './TeckStack.scss'

const TechStack: React.FunctionComponent<{children?: React.ReactNode}> = (props) => {

    let items = new Array<boolean>(100).fill(true).map((item, i) => <TechStackItem key={i}/>);

    return (
        <div className="TechStack">
            {items}
        </div>
    );
};

export default TechStack;