import React from 'react';
import Featured from '../../componenets/common/Featured';
import Category from './category';
import '../common/body.css';
import Services from './services';
import Listing from '../common/listing';
import HomeListing from '../../API/Listing/listing';

export default function Body() {
    return (
        <section>
            <main className='m-auto'>
                <Featured
                topic="Properties By Area"
                detail="Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Voluptates 
                architecto commodi, amet minus quisquam 
                officiis adipisci nihil atque quas, alias praesentium 
                ad vero quidem sunt esse temporibus rerum deserunt at!"
                />
                <Category />
                <Featured
                topic="Properties By Area"
                detail="Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Voluptates 
                architecto commodi, amet minus quisquam 
                officiis adipisci nihil atque quas, alias praesentium 
                ad vero quidem sunt esse temporibus rerum deserunt at!"
                />
                <Services />
                <Featured
                topic="Latest Properties of Rent"
                detail=""
                />
                {/* <Listing /> */}
                <HomeListing />
            </main>
        </section>
    )
}