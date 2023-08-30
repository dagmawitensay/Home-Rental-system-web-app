import React from 'react';
import './nav.css';
import House from '../../Foo/Home/HouseLine (1).png';
import { Outlet, Link } from 'react-router-dom';


export default function NavBar(props) {
    const textColor = props.textcolor ? props.textcolor : 'text-light';
    const border = props.textcolor ? 'border-black': 'border-light';
    return (
        <div style={{backgroundColor: props.bg}}>
    <nav className="navbar navbar-expand-lg pt-3">
            <div className="container-fluid">
              <a className="navbar-brand text-light ps-4" href="#">
                <img src={House} alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-5">
                  <li className="nav-item">
                    <Link to={`home`} className={'nav-link active ' + textColor}>Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={`properties`} className={'nav-link active ' + textColor}>Properties</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={`about`} className={'nav-link active ' + textColor}>About Us</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={`contact`} className={'nav-link active ' + textColor}>Contact Us</Link>
                  </li>
                  <li className="nav-item ">
                  <Link to={`add`} className={'btn btn-outline ' + textColor + ' ' + border} type='submit'>ADD LISTING</Link>
                  </li>

                  <div className="dropdown nav-item ms-2">
                    <Link className={"btn dropdown-toggle " + textColor} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Sign UP</Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className={"dropdown-item  bg-secondary " + textColor} to={`lesser`}>Lesser</Link>
                      </li>
                      <li>
                      <Link className={"dropdown-item  bg-secondary " + textColor} to={`lessee`}>Lessee</Link>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item">
                  <Link to={`admin`} className={'nav-link active ' + textColor}>Admin</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={`login`} className={'nav-link active ' + textColor}>Login</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        </div>
        )
}