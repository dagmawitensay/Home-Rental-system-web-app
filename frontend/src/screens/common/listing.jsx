import React from 'react';
import homes from '../../API/Listing/listing';
import Card from './card';



export default function Listing() {
    return (
        <div class="row" id="options">                                        
        {/* {
            homes.map((home) => {
                return (
                    <Card
                        id={home.id}
                        src={home.src}
                        price={home.price}
                        imageId={home.imageId} 
                    />
                )
            })
        } */}
        </div>
    )
    
}
