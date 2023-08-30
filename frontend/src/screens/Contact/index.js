import React from 'react';
import Header from '../common/header';
import BaseBanner from '../../componenets/common/basebaner';
import Body from './main';
import Footer from '../common/footer';

export default function ContactUsScreen() {
    return (
        <div>
            <Header message="Contact Us" />
            <Body />
            <Footer />
        </div>
    )
}