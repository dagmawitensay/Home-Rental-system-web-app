import React from 'react';
import TopBanner from '../../componenets/Home/banner';
import NavBar from '../../componenets/Home/nav';
import Background from '../../Foo/Home/index.jpg';
import Banner from '../../componenets/Home/motto';
import SearchBar from '../../componenets/common/search';

function Header() {
    return (
        <div>
            <header style={{backgroundImage: `url(${Background})`, 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%'
                    }}>
                <TopBanner />
                <NavBar />
                <Banner />
                <SearchBar />
            </header> 
        </div> 
    )
}

export default Header;