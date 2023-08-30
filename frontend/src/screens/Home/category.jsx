import React from 'react';
import CategoryImage from './categoriesimg';
import Bole from '../../Foo/Home/Rectangle 10.jpg';
import Arada from '../../Foo/Home/Rectangle 11.jpg';
import Yeka from '../../Foo/Home/Rectangle 12.jpg';
import './categories.css';

export default function Category() {
    return (
        <div class="fluid-container area-images m-auto">
            <div class="row py-4">
            <CategoryImage name="Bole" amount="25" imageUrl={Bole}/>
            <CategoryImage name="Arada" amount="30" imageUrl={Arada}/>
            <CategoryImage name="Yeka" amount="20" imageUrl={Yeka}/>
            </div>
        </div>
    )
}