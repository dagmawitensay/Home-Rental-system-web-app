import React from 'react';
import './nav.css';
import House from '../../Foo/Home/HouseLine (1).png';


function NavBar() {
    return (
        <div>
    <nav class="navbar navbar-expand-lg pt-3">
            <div class="container-fluid">
              <a class="navbar-brand text-light ps-4" href="#">
                <img src={House} alt="" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 ms-auto pe-5">
                  <li class="nav-item">
                    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./properties.html">Properties</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./about.html">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact Us</a>
                  </li>
                  <li class="nav-item ">
                    <a class="btn btn-outline-light border-light" type="submit" href="./housePosts.html">ADD LISTING</a>
                  </li>

                  <div class="dropdown nav-item ms-2">
                    <button class="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign UP
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item  bg-secondary" href="./LesserSignup.html">Lessor</a></li>
                      <li><a class="dropdown-item bg-secondary" href="./lesseSignup.html">Lessee</a></li>
                    </ul>
                  </div>
                  <li class="nav-item">
                    <a class="nav-link" href="./Admin.html">Admin</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./lesseLogin.html">Lesse Login</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        </div>
        )
}

export default NavBar;