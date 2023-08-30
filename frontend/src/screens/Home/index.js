import React from 'react';
import Header from './header';
import Body from './body';
import Footer from '../common/footer';
import ContactFooter from './contactfooter';

function Home() {
    return (
        <div >
        <Header />
        <Body />
        <ContactFooter />
        <Footer />
        </div>
    )
}

export default Home;