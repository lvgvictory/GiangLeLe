import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/notfound',
        exact : false,
        main : () => <NotFound />
    },
    {
        path : '/products',
        exact : false,
        main : ({match}) => <Products match={match} />
    }
];

export default routes;