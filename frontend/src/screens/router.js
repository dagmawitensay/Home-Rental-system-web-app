import React from 'react';
import NotFoundScreen from './NotFound';
import HomeScreen from './Home';
import PropertiesScreen from './Properties';
import AboutUs from './About';
import ContactUsScreen from './Contact';
import HousePostScreen from './HouePosts';
import AdminScreen from './Admin/AdminListing';
import AdminApprove from './Admin/AdminApprove';
import LesserSignupForm from './Auth/lessersignup';
import LesseSignUpForm from './Auth/lessesignup';
import {
    createBrowserRouter, redirect,
} from 'react-router-dom';
import Login from './Auth/login';
import './app.css';
import LesserUploadedHomes from './LesserPosts';
import authService from '../services/auth.service';
import HomeDetail from './Home/homedetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: authService.isLoggedIn ?  <HomeScreen /> : <Login />
        
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
        path: '/properties/:id',
        element: <HomeDetail />
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
    },
    {
        path: '/admin',
        element: <AdminScreen />,
    
    },
    {
        path: 'admin/approve/:id',
        element: <AdminApprove />
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/lesserSignup',
        element: <LesserSignupForm />
    },
    {
        path: '/lesseeSignup',
        element: <LesseSignUpForm />
    },
    {
        path: '/uploadedhomes',
        element: <LesserUploadedHomes />
    },
]);

export default  router;