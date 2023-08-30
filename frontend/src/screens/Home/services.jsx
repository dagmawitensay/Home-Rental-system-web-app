import React from 'react';
import ServiceCard from './servicecard';
import Home1 from '../../Foo/Home/63-home 3.png';
import Home2 from '../../Foo/Home/63-home 2.png';
import Home3 from '../../Foo/Home/63-home 4.png';

export default function Services() {
    return (
        <div className="row justify-content-center">
            <ServiceCard 
            topic="Rent your home" 
            detail="We do a free evaluaion to be sure you want to rent." 
            src={Home1}
            />
            <ServiceCard 
            topic="Buy a home" 
            detail="We do a free evaluaion to be sure you want to rent." 
            src={Home2}
            />
            <ServiceCard 
            topic="Free marketing" 
            detail="We do a free evaluaion to be sure you want to rent." 
            src={Home3}
            />
        </div>
    )
}