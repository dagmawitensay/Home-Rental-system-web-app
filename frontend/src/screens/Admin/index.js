import React from 'react';
import Header from '../common/header';
import Body from './main';
import Footer from '../common/footer';

export default function AdminScreen() {
    return (
        <div>
            <Header message="Admin"/>
            <Body />
            <Footer />
        </div>
    )
}