import React from 'react';
import NotFoundScreen from './NotFound';
import HomeScreen from './Home';
import {
    createBrowserRouter,
} from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '*',
        element: <NotFoundScreen />
    }
]);

export default  router;