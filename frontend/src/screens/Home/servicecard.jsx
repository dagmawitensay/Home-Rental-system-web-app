import React from 'react';
import './services.css';

export default function ServiceCard(props) {
    return (
        <div className="get-start-card card p-3 col-md-3 m-3 border-0">
            <div className="card-icon icon-2">
                <img src={props.src} alt="" class="img-fluid" />
            </div>
            <h3 className="card-title py-3">{props.topic}</h3>
            <p className="card-text pb-2">
                {props.detail}
            </p>
            <a href="About us" style={{color: '#4A60A1'}}>Read more</a>
        </div>
    )
}