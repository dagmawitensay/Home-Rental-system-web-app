import React from 'react';
import './contactfooter.css';
import Background from "../../Foo/../Foo/Home/Rectangle\ 24.jpg";

export default function ContactFooter() {
    return (
        <div className="base w-100 align-middle">
            <div class="d-flex flex-column justify-content-center align align-items-center h-100 base-topic m-auto text-center" >
                <h2 class="text-light">Find Best Place For Living</h2>
                <p class="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos repellat provident dolores. Cupiditate praesentium porro fuga nostrum illum tenetur explicabo.</p>
                <button class="btn text-light border mt-2" onclick="contact.html">Contact Us</button>
            </div>
        </div>
    )
}