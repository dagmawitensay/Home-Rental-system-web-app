import React from 'react';
import './basebanner.css';
import Background from '../../Foo/Home/Rectangle 25.png';

export default function BaseBanner(props) {
    return (
        <section className="normal-header-img d-flex justify-content-center align-items-center">
          <h1 className="text-light">{props.message}</h1>
        </section>
    )
}