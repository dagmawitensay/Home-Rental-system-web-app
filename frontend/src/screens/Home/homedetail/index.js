import React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import { useParams } from 'react-router';
import Body from './body';


export default function HomeDetail() {
    const { id } = useParams();
    console.log(id);
    return (
      <div>
        <Header message="Home Detail"/>
        <Body homeId={id}/>
        <Footer />
      </div>
    );
}