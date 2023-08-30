import React from 'react';
import './featured.css';

export default function Featured(props) {
    return (
        <div class="topic m-auto text-center">
            <h2>{props.topic}</h2>
            <p>{props.detail}</p>
        </div>
    )
}