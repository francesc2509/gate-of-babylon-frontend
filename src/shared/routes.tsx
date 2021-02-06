import React from 'react';
import { Home, Social, TechStack } from './pages';

interface Route {
    icon: string;
    label: string;
    path: string;
    view: React.ReactNode;
}

const routes: Route[] = [
    {
        icon: 'home',
        label: 'Home',
        path: '/home',
        view: <Home />,
    },
    {
        icon: 'code',
        label: 'Technologies',
        path: '/tech-stack',
        view: <TechStack />,
    },
    {
        icon: 'link',
        label: 'Social',
        path: '/social',
        view: <Social />,
    }
];

export {
    routes
}