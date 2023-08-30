import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Body from './main';

export default function AboutUs() {
    return (
        <div>
            <Header message="About Us"/>
            <Body />
            <Footer />
        </div>
    )
}