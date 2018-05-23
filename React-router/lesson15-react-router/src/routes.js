import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Login from './components/Login';

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
        main : ({ match, location }) => <Products match={match} location={location} />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    }
];

export default routes;