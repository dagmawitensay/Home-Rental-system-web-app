import React from 'react';
import NotFoundScreen from './NotFound';
import HomeScreen from './Home';
import PropertiesScreen from './Properties';
import AboutUs from './About';
import ContactUsScreen from './Contact';
import HousePostScreen from './HouePosts';
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
    },
    {
        path: '/properties',
        element: <PropertiesScreen />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/contact',
        element: <ContactUsScreen />
    },
    {
        path: '/add',
        element: <HousePostScreen />
    }
]);

export default  router;