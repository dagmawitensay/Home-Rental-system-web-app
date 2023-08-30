import React from 'react';

export default function Button(props) {
    return (
        <div>
            <button type="button" className={props.class} id={props.class}
            onClick={props.onClick}
            >{props.value}</button>
        </div>
    )
}