import React from 'react';
import Header from '../common/header';
import HouseRegistrationForm from './main';
import Footer from '../common/footer';

export default function HousePostScreen() {
    return (
        <div>
            <Header message="POST A HOUSE" />
            <HouseRegistrationForm />
            <Footer />
        </div>
    )
}