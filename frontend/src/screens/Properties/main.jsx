import React from 'react';
import SearchBar from '../../componenets/common/search';
import '../common/body.css';
import Featured from '../../componenets/common/Featured';
import Listing from '../common/listing';
import HomeListing from '../../API/Listing/listing';

export default function Body() {
    return (
        <main className='m-auto mt-5'>
            <SearchBar />
            <Featured
                topic="Latest Properties of Rent"
                detail=""
                />
                <Listing />
                <HomeListing />
        </main>
    )
}