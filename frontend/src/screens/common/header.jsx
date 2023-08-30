import React from 'react';
import TopBanner from '../../componenets/common/banner';
import NavBar from '../../componenets/common/nav';
import BaseBanner from '../../componenets/common/basebaner';

export default function Header(props) {
    return (
    <header>
        <TopBanner bg="#2C3A61" />
        <NavBar bg="" textcolor="text-dark" />
        <BaseBanner message={props.message} />
    </header>
    )
}