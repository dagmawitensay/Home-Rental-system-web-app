import React from 'react';
import './contactfooter.css';
import { useNavigate } from 'react-router';


export default function ContactFooter() {
    const navigate = useNavigate();
    function handleButton() {
        navigate('/contact')
    }
    return (
        <div className="base w-100 align-middle">
            <div class="d-flex flex-column justify-content-center align align-items-center h-100 base-topic m-auto text-center" >
                <h2 class="text-light">Find Best Place For Living</h2>
                <p class="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos repellat provident dolores. Cupiditate praesentium porro fuga nostrum illum tenetur explicabo.</p>
                <button class="btn text-light border mt-2" onClick={handleButton}>Contact Us</button>
            </div>
        </div>
    )
}