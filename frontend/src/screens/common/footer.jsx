import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';


export default function Footer( ){
    return (
        <footer class="mb-3 mt-5 border-top mx-auto pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 item">
                    <div><img src="Images/HouseLine2.png" alt="" /><span>Web House Rent</span></div>
                    <h3>Contact Us</h3>
                    <ul class="list-unstyled">
                        <li><a href="#">call: <span class="telephone">+123 400 123</span></a></li>
                        <li><a href="#">Bole, Addis Ababa, Ethiopia</a></li>
                        <li class="py-3"><a href="#">Email: dagitensay@gmail.com</a></li>
                        <FontAwesomeIcon icon={faFacebookF} style={{backgroundColor: '#EDEFF6' , borderRadius: '0.2em', padding: '.7em', color: '#4A60A1'}} />
                        <FontAwesomeIcon icon={faDribbble} style={{backgroundColor: '#EDEFF6' , borderRadius: '0.2em', padding: '.7em', color: '#4A60A1'}}/>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{backgroundColor: '#EDEFF6' , borderRadius: '0.2em', padding: '.7em', color: '#4A60A1'}} />
                        <FontAwesomeIcon icon={faInstagram} style={{backgroundColor: '#EDEFF6' , borderRadius: '0.2em', padding: '.7em', color: '#4A60A1'}}/>
                        <FontAwesomeIcon icon={faBehance} style={{backgroundColor: '#EDEFF6' , borderRadius: '0.2em', padding: '.7em', color: '#4A60A1'}} />
                        
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item ps-4">
                    <h3>Features</h3>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Become a Lessor</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item">
                    <h3>Team and policies</h3>
                    <ul class="list-unstyled">
                        <li><a href="#">Tearns of services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Seurity</a></li>
                    </ul>
                </div>
                {/* <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                    <p class="copyright">Company Name © 2018</p>
                </div> */}
            </div>
        </div>
    </footer>
    )
};