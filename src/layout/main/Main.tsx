import React, { ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../shared/routes'

import './Main.css'

const Main: React.FunctionComponent<{children?: ReactNode}> = () => {
    const switchItems = routes.map(route => {
        return (
            <Route path={route.path} key={route.path}>
                {route.view}
            </Route>
        );
    });

    return (
        <main>
            <Switch>
                {switchItems}
            </Switch>
        </main>
    );
};

export default Main;