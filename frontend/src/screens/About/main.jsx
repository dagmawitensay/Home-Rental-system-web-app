import React from 'react';
import './about.css';
import Image from '../../Foo/Home/aboutus.jpg';

export default function Body() {
    return (
        <main className='m-auto fs-5'>
            <div className="container mt-5">
            <div className="row m-auto">
                <div className="col-md-6">
                <h1 className="text-center pb-4">About Us</h1>
                <p>
                    Welcome to Home Rental, your one-stop destination for finding your
                    dream home. We offer a wide range of rental properties, from
                    apartments and condos to houses and villas, in some of the most
                    desirable locations around Ethiopia.
                </p>
                <p>
                    Our mission is to provide a hassle-free and enjoyable home rental
                    experience for our customers. We take pride in our commitment to
                    quality service, professionalism, and integrity.
                </p>
                </div>
                <div className="col-md-6">
                <img src={Image} alt="About Us Image" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <h3>Our Values</h3>
                <ul>
                    <li>Customer satisfaction is our top priority.</li>
                    <li>We believe in transparency and honesty in all our dealings.</li>
                    <li>
                    We are committed to providing high-quality service and
                    professionalism.
                    </li>
                    <li>
                    We value diversity and inclusivity in all aspects of our business.
                    </li>
                </ul>
                </div>
                <div className="col-md-4">
                <h3>Our Team</h3>
                <p>
                    Our team is made up of dedicated professionals who are passionate
                    about helping our customers find their perfect home. We believe in
                    working together to achieve our goals and create a positive impact
                    in the communities we serve.
                </p>
                </div>
                <div className="col-md-4">
                <h3>Contact Us</h3>
                <ul>
                    <li>Phone: 09-21-45-36-57</li>
                    <li>Email: info@homerental.com</li>
                    <li>Address: 123 Arat Killo, Addis Ababa, Ethiopia</li>
                </ul>
                </div>
            </div>
            </div>
        </main>
    )
}